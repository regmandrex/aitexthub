import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { put, del } from '@vercel/blob';
import Replicate from 'replicate';
import { auth } from '@/lib/auth';
import { reserveImage, releaseImage } from '@/lib/subscription';
import { INPAINT_IMAGE_MAX_BYTES } from '@/lib/plans';

// LaMa image inpainting is fast enough to run synchronously within the
// function timeout — no polling needed (unlike video). Model takes an
// image + a mask (white = remove).
export const maxDuration = 60;

const LAMA_VERSION = 'cdac78a1bec5b23c07fd29692fb70baa513ea403a39e643c48ec5edadb15fe72';

export async function POST(req: NextRequest) {
  const token = process.env.REPLICATE_API_TOKEN;
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token || !blobToken) {
    return NextResponse.json(
      { error: 'AI image watermark removal is not configured yet. Please check back soon.' },
      { status: 503 },
    );
  }

  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json(
      { error: 'Please sign in to use AI watermark removal.', needsAuth: true },
      { status: 401 },
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid upload.' }, { status: 400 });
  }
  const image = form.get('image');
  const mask = form.get('mask'); // static PNG: white = region to erase
  if (!(image instanceof File) || !(mask instanceof File)) {
    return NextResponse.json({ error: 'An image and a mask are required.' }, { status: 400 });
  }
  if (image.size > INPAINT_IMAGE_MAX_BYTES) {
    return NextResponse.json(
      { error: `Image is too large. The limit is ${Math.round(INPAINT_IMAGE_MAX_BYTES / (1024 * 1024))} MB.` },
      { status: 413 },
    );
  }

  const reservation = await reserveImage(userId);
  if (!reservation.allowed) {
    const msg = reservation.imagesLimit === null
      ? 'AI image watermark removal requires a Pro plan.'
      : `You've used all ${reservation.imagesLimit} AI image removals in this billing period. Your quota resets at renewal.`;
    return NextResponse.json({ error: msg, upgradeRequired: true }, { status: 403 });
  }

  const stamp = `${userId}-${Date.now()}`;
  let imageUrl: string | undefined;
  let maskUrl: string | undefined;
  try {
    const [imgBlob, maskBlob] = await Promise.all([
      put(`inpaint-image/${stamp}-src.png`, image, { access: 'public', token: blobToken, contentType: image.type || 'image/png' }),
      put(`inpaint-image/${stamp}-mask.png`, mask, { access: 'public', token: blobToken, contentType: 'image/png' }),
    ]);
    imageUrl = imgBlob.url;
    maskUrl = maskBlob.url;

    const replicate = new Replicate({ auth: token });
    // Runs to completion (or throws) — images are fast.
    const output = await replicate.run(`allenhooo/lama:${LAMA_VERSION}`, {
      input: { image: imgBlob.url, mask: maskBlob.url },
    });

    const resultUrl = Array.isArray(output) ? output[0] : output;
    if (!resultUrl || typeof resultUrl !== 'string') {
      throw new Error('No output produced');
    }
    return NextResponse.json({ output: resultUrl });
  } catch (err) {
    // Refund the reserved image so a failure doesn't cost the user.
    await releaseImage(userId).catch(() => {});
    console.error('[inpaint-image]', err);
    return NextResponse.json(
      { error: 'Could not remove the watermark. Please try again or try a different image.' },
      { status: 502 },
    );
  } finally {
    // Always clean up the uploaded inputs.
    await Promise.all([
      imageUrl ? del(imageUrl, { token: blobToken }).catch(() => {}) : null,
      maskUrl ? del(maskUrl, { token: blobToken }).catch(() => {}) : null,
    ]);
  }
}

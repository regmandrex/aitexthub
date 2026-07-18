import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { put } from '@vercel/blob';
import Replicate from 'replicate';
import { auth } from '@/lib/auth';
import { reserveVideo, releaseVideo } from '@/lib/subscription';
import { INPAINT_MAX_BYTES } from '@/lib/plans';

// Video inpainting is long-running; allow the function room to upload + kick off.
export const maxDuration = 60;

// ProPainter — flow-guided video inpainting (jd7h/propainter). Pinned by
// version hash. `mask` accepts a static PNG (white = remove), so a single
// mask image covers the whole clip — ideal for a fixed-position watermark.
const PROPAINTER_VERSION =
  'e5ea7ae04e97c96a0e14c70d8e4cb899abdf326a377c01f1c10966ccd6c6bae4';

export async function POST(req: NextRequest) {
  const token = process.env.REPLICATE_API_TOKEN;
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token || !blobToken) {
    return NextResponse.json(
      { error: 'Video watermark removal is not configured yet. Please check back soon.' },
      { status: 503 },
    );
  }

  // ── Auth + Pro gate ──────────────────────────────────────────────────
  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json(
      { error: 'Please sign in to use AI watermark removal.', needsAuth: true },
      { status: 401 },
    );
  }

  // ── Read multipart upload ────────────────────────────────────────────
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid upload.' }, { status: 400 });
  }
  const video = form.get('video');
  const mask = form.get('mask'); // static PNG: white = watermark region to remove
  if (!(video instanceof File) || !(mask instanceof File)) {
    return NextResponse.json({ error: 'A video and a mask are required.' }, { status: 400 });
  }
  if (video.size > INPAINT_MAX_BYTES) {
    return NextResponse.json(
      { error: `Video is too large. The limit is ${Math.round(INPAINT_MAX_BYTES / (1024 * 1024))} MB.` },
      { status: 413 },
    );
  }

  // ── Reserve one video job (atomic; refunded on failure below) ────────
  const reservation = await reserveVideo(userId);
  if (!reservation.allowed) {
    const msg = reservation.videosLimit === null
      ? 'AI watermark removal requires a Pro plan.'
      : `You've used all ${reservation.videosLimit} AI watermark removals in this billing period. Your quota resets at renewal.`;
    return NextResponse.json({ error: msg, upgradeRequired: true }, { status: 403 });
  }

  try {
    // Store both files so Replicate can fetch them by URL.
    const stamp = `${userId}-${Date.now()}`;
    const [videoBlob, maskBlob] = await Promise.all([
      put(`inpaint/${stamp}-src.mp4`, video, { access: 'public', token: blobToken, contentType: video.type || 'video/mp4' }),
      put(`inpaint/${stamp}-mask.png`, mask, { access: 'public', token: blobToken, contentType: 'image/png' }),
    ]);

    const replicate = new Replicate({ auth: token });
    const prediction = await replicate.predictions.create({
      version: PROPAINTER_VERSION,
      input: {
        video: videoBlob.url,
        mask: maskBlob.url,
        mode: 'video_inpainting',
        mask_dilation: 8,
      },
    });

    // The input blob URLs live on the prediction object itself, so /status can
    // read them back and delete the uploads once the job is terminal — no need
    // to trust the client with blob URLs.
    return NextResponse.json({ id: prediction.id, status: prediction.status });
  } catch (err) {
    // Refund the reserved job so a provider/storage failure doesn't cost the user.
    await releaseVideo(userId).catch(() => {});
    console.error('[inpaint/start]', err);
    return NextResponse.json(
      { error: 'Could not start watermark removal. Please try again.' },
      { status: 502 },
    );
  }
}

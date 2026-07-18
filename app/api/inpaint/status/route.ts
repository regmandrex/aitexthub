import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { del } from '@vercel/blob';
import Replicate from 'replicate';
import { auth } from '@/lib/auth';
import { releaseVideo } from '@/lib/subscription';

// Delete the uploaded source + mask once a job is terminal, so user videos
// never linger. The input URLs are read from the prediction itself.
async function cleanupInputs(input: unknown) {
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  if (!blobToken || !input || typeof input !== 'object') return;
  const urls = [
    (input as Record<string, unknown>).video,
    (input as Record<string, unknown>).mask,
  ].filter((u): u is string => typeof u === 'string' && u.includes('.blob.vercel-storage.com'));
  await Promise.all(urls.map((u) => del(u, { token: blobToken }).catch(() => {})));
}

export async function GET(req: NextRequest) {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'Not configured.' }, { status: 503 });
  }

  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json({ error: 'Please sign in.' }, { status: 401 });
  }

  const id = req.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Missing job id.' }, { status: 400 });
  }

  try {
    const replicate = new Replicate({ auth: token });
    const p = await replicate.predictions.get(id);

    if (p.status === 'succeeded') {
      // ProPainter returns the cleaned video URL as output.
      const output = Array.isArray(p.output) ? p.output[0] : p.output;
      await cleanupInputs(p.input);
      return NextResponse.json({ status: 'succeeded', output });
    }

    if (p.status === 'failed' || p.status === 'canceled') {
      // The job never produced a result — refund the reserved quota so the
      // user isn't charged a video for a failed run, and clean up the uploads.
      await releaseVideo(userId).catch(() => {});
      await cleanupInputs(p.input);
      return NextResponse.json({
        status: p.status,
        error: 'Watermark removal failed for this video. Your quota was not used — please try again or try a different clip.',
      });
    }

    // starting | processing
    return NextResponse.json({ status: p.status });
  } catch (err) {
    console.error('[inpaint/status]', err);
    return NextResponse.json({ error: 'Could not check job status.' }, { status: 502 });
  }
}

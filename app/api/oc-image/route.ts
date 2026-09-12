import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { releaseImage, reserveImage } from '@/lib/subscription';

const OPENROUTER_IMAGES_API = 'https://openrouter.ai/api/v1/images';
const IMAGE_MODEL = process.env.OPENROUTER_IMAGE_MODEL ?? 'openai/gpt-5-image';

export const maxDuration = 120;

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) return NextResponse.json({ error: 'A Pro plan is required to generate character images.' }, { status: 401 });

  const reservation = await reserveImage(session.user.id);
  if (!reservation.allowed) return NextResponse.json({ error: 'You have reached your image limit. Upgrade or renew your Pro plan to continue.' }, { status: 403 });

  const refund = async () => { await releaseImage(session.user.id); };
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey || apiKey === 'your-openrouter-key-here') {
    await refund();
    return NextResponse.json({ error: 'OpenRouter image generation is not configured.' }, { status: 500 });
  }

  let body: { prompt?: string; tool?: string };
  try { body = await req.json(); } catch {
    await refund();
    return NextResponse.json({ error: 'Invalid image request.' }, { status: 400 });
  }

  const prompt = body.prompt?.trim();
  if (!prompt) { await refund(); return NextResponse.json({ error: 'An image prompt is required.' }, { status: 400 }); }
  if (prompt.length > 12000) { await refund(); return NextResponse.json({ error: 'The image prompt is too long.' }, { status: 400 }); }

  try {
    const response = await fetch(OPENROUTER_IMAGES_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aitextcleanuptools.com',
        'X-Title': `AI Text Cleanup Tools - ${body.tool || 'OC Maker'}`,
      },
      body: JSON.stringify({ model: IMAGE_MODEL, prompt, n: 1, size: '1024x1024', quality: 'medium', output_format: 'png' }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      await refund();
      const message = data?.error?.message || data?.error || `Image service error (${response.status})`;
      console.error('[oc-image] OpenRouter error:', response.status, message);
      return NextResponse.json({ error: String(message) }, { status: 502 });
    }
    const encoded = data?.data?.[0]?.b64_json;
    if (!encoded) { await refund(); return NextResponse.json({ error: 'The image service returned no image.' }, { status: 502 }); }
    return NextResponse.json({ image: `data:image/png;base64,${encoded}`, model: IMAGE_MODEL });
  } catch (error) {
    await refund();
    console.error('[oc-image]', error);
    return NextResponse.json({ error: 'Could not generate the image. Please try again.' }, { status: 502 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import figlet from 'figlet';

export async function POST(req: NextRequest) {
  try {
    const { text, font } = await req.json();
    if (!text?.trim()) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    const result = await new Promise<string>((resolve, reject) => {
      figlet.text(text, { font: font ?? 'Standard' }, (err, data) => {
        if (err || !data) reject(err ?? new Error('No output'));
        else resolve(data);
      });
    });

    return NextResponse.json({ output: result });
  } catch (err) {
    return NextResponse.json({ error: 'Could not generate ASCII art.' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid body' }, { status: 400 });
  }

  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid email' }, { status: 400 });
  }

  try {
    await pool.query(
      `INSERT INTO public.email_unsubscribes (email) VALUES ($1)
       ON CONFLICT (email) DO NOTHING`,
      [email.toLowerCase().trim()],
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[unsubscribe] db error:', err);
    return NextResponse.json({ ok: false, error: 'server error' }, { status: 500 });
  }
}

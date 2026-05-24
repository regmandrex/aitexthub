import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { getUserPlan } from '@/lib/subscription';
import { headers } from 'next/headers';

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    return NextResponse.json({ isPro: false, plan: null, wordsUsed: 0, wordsLimit: null });
  }

  const plan = await getUserPlan(session.user.id);
  return NextResponse.json(plan);
}

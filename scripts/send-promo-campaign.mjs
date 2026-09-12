/**
 * One-time June promo campaign send (real recipients).
 *
 * Recipients are baked in below (23 real account emails as of the send date,
 * with 3 throwaway/temp-mail addresses excluded) so this script cannot pull
 * or email anyone unexpectedly. Run once; do not re-run without refreshing the
 * list. Sends via Resend from the marketing-ish noreply@ sender, one message
 * per recipient (so each gets their own unsubscribe + name), lightly throttled,
 * with per-address success/failure logging.
 *
 * Usage: RESEND_API_KEY=... node scripts/send-promo-campaign.mjs
 *        Add DRY_RUN=1 to print what would send without sending.
 */

import { Resend } from 'resend';
import { Pool } from 'pg';
import { junePromoSubject, junePromoHtml } from '../lib/emails/june-promo.ts';

const FROM = 'AI Text Cleanup Tools <noreply@aitextcleanuptools.com>';
const UNSUB = 'https://aitextcleanuptools.com/unsubscribe';

// 23 recipients (throwaways dosbee.com / 4nly.com / slyclick.blog excluded).
// All currently 'new' audience (no active Pro subscription).
const RECIPIENTS = [
  { email: 'best.alice1@icloud.com', name: 'best.alice1' },
  { email: 'elaine@roguemg.com', name: 'elaine' },
  { email: 'antonieta.rodil@gmail.com', name: 'antonieta.rodil' },
  { email: '1124320049@qq.com', name: '1124320049' },
  { email: 'lian.ae.266@gmail.com', name: 'lian.ae.266' },
  { email: 'maganomar370@gmail.com', name: 'maganomar370' },
  { email: '354784193@qq.com', name: '354784193' },
  { email: 'amysh116@gmail.com', name: 'amysh116' },
  { email: 'savannah.rose0806@gmail.com', name: 'savannah.rose0806' },
  { email: 'jinhokim1219@naver.com', name: 'jinhokim1219' },
  { email: 'journeyisonajourney@gmail.com', name: 'journeyisonajourney' },
  { email: 'imliterallykai777@gmail.com', name: 'imliterallykai777' },
  { email: 'anishsookeera@outlook.com', name: 'anishsookeera' },
  { email: 'yitaoyang03@gmail.com', name: 'yitaoyang03' },
  { email: 'adulojualaba1@gmail.com', name: 'adulojualaba1' },
  { email: 'malcolmxlondon@gmail.com', name: 'malcolmxlondon' },
  { email: 'pokekaithlyntheskygirl@gmail.com', name: 'pokekaithlyntheskygirl' },
  { email: 'finntconnors@gmail.com', name: 'finntconnors' },
  { email: 'maryket9010@mail.ru', name: 'maryket9010' },
  { email: '2717813952@qq.com', name: '2717813952' },
  { email: 'charledgreene@gmail.com', name: 'charledgreene' },
  { email: 'callietylerzeffert@gmail.com', name: 'callietylerzeffert' },
  { email: 'regmandrex@gmail.com', name: 'regmandrex' },
];

const AUDIENCE = 'new';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set. Aborting.');
    process.exit(1);
  }
  const dry = process.env.DRY_RUN === '1';
  const resend = new Resend(process.env.RESEND_API_KEY);
  const subject = junePromoSubject(AUDIENCE);

  // Honor opt-outs: never email anyone on the unsubscribe list.
  let unsubscribed = new Set();
  if (process.env.DATABASE_URL) {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    try {
      const { rows } = await pool.query('SELECT email FROM public.email_unsubscribes');
      unsubscribed = new Set(rows.map((x) => x.email.toLowerCase()));
    } catch (e) {
      console.error('Could not read unsubscribe list, aborting to be safe:', e);
      process.exit(1);
    } finally {
      await pool.end();
    }
  }

  const queue = RECIPIENTS.filter((r) => !unsubscribed.has(r.email.toLowerCase()));
  const skipped = RECIPIENTS.length - queue.length;

  let ok = 0;
  const failures = [];

  console.log(`${dry ? '[DRY RUN] ' : ''}Sending "${subject}" to ${queue.length} recipients (${skipped} skipped as unsubscribed)...\n`);

  for (const r of queue) {
    const html = junePromoHtml(r.name, AUDIENCE).replace(
      '{{unsubscribe}}',
      `${UNSUB}?email=${encodeURIComponent(r.email)}`,
    );
    if (dry) {
      console.log(`  would send -> ${r.email}`);
      continue;
    }
    try {
      const { data, error } = await resend.emails.send({
        from: FROM,
        to: r.email,
        subject,
        html,
      });
      if (error) {
        failures.push({ email: r.email, error: JSON.stringify(error) });
        console.log(`  FAIL ${r.email}: ${JSON.stringify(error)}`);
      } else {
        ok++;
        console.log(`  sent ${r.email} (${data?.id})`);
      }
    } catch (err) {
      failures.push({ email: r.email, error: String(err) });
      console.log(`  THREW ${r.email}: ${err}`);
    }
    await sleep(600); // gentle throttle
  }

  console.log(`\nDone. Sent: ${ok}/${queue.length}. Failures: ${failures.length}. Skipped (unsubscribed): ${skipped}.`);
  if (failures.length) console.log('Failed addresses:', failures.map((f) => f.email).join(', '));
}

main();

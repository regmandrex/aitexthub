import { Resend } from 'resend';
import { planVideosLimit, planImagesLimit, planWordsLimit } from '@/lib/plans';

const resend = new Resend(process.env.RESEND_API_KEY);

// Personal, replyable support address (verified on the gptcleanuptools.com
// domain in Resend). Reply-To matches so customer replies reach support.
const FROM = 'GPT Cleanup Tools <support@gptcleanuptools.com>';
const REPLY_TO = 'support@gptcleanuptools.com';

const PLAN_LABELS: Record<string, string> = {
  weekly: 'Weekly',
  monthly: 'Monthly',
  annual: 'Annual',
};

const PLAN_QUOTA_TEXT: Record<string, string> = {
  weekly: '50,000 words / week',
  monthly: '300,000 words / month',
  annual: 'Unlimited words',
};

/**
 * Plan benefits, led by the AI watermark features (the things competitors
 * don't offer) rather than word counts. Sourced from lib/plans.ts so the
 * numbers can never drift from what's actually enforced.
 */
export function planBenefits(plan: string): string[] {
  const videos = planVideosLimit(plan);
  const images = planImagesLimit(plan);
  const words = planWordsLimit(plan);
  return [
    `<strong style="color:#1e293b">AI video watermark removal — ${videos ?? 'unlimited'} videos</strong>`,
    `<strong style="color:#1e293b">AI image watermark erase — ${images ?? 'unlimited'} images</strong>`,
    words === null
      ? 'Unlimited words — no monthly cap'
      : `${words.toLocaleString()} words for humanizing & rewriting`,
    'Bypass Turnitin, GPTZero, Originality &amp; more',
    'No ads, across the whole site',
  ];
}

export function welcomeHtml(name: string, plan: string): string {
  const planLabel = PLAN_LABELS[plan] ?? 'Pro';
  const quota = PLAN_QUOTA_TEXT[plan] ?? 'More words & all Pro tools';
  const greeting = name && name.trim() ? name.trim().split(' ')[0] : 'there';
  const benefits = planBenefits(plan);

  return `
  <div style="margin:0;padding:0;background:#f1f5f9">
    <div style="max-width:560px;margin:0 auto;padding:24px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">

      <!-- Header / brand banner -->
      <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);border-radius:16px 16px 0 0;padding:32px 28px;text-align:center">
        <p style="margin:0;color:#ede9fe;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase">GPT Cleanup Tools</p>
        <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:800">Welcome to Pro! 🎉</h1>
      </div>

      <!-- Body card -->
      <div style="background:#ffffff;border-radius:0 0 16px 16px;padding:28px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
        <p style="margin:0 0 14px;color:#1e293b;font-size:16px">Hi ${greeting},</p>
        <p style="margin:0 0 14px;color:#475569;font-size:15px;line-height:1.6">
          Thank you for upgrading — your <strong>${planLabel} Pro</strong> plan is now active. 🚀
          You've unlocked the full toolkit, so you can stop fighting AI detectors and messy text and just get your work done.
        </p>

        <!-- Plan box -->
        <div style="margin:20px 0;border:1px solid #e2e8f0;border-radius:12px;padding:16px 18px;background:#faf5ff">
          <p style="margin:0;color:#7c3aed;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Your plan</p>
          <p style="margin:6px 0 0;color:#1e293b;font-size:18px;font-weight:700">${planLabel} — ${quota}</p>
        </div>

        <p style="margin:0 0 12px;color:#1e293b;font-size:15px;font-weight:700">What you can do right now:</p>
        <ul style="margin:0 0 22px;padding-left:18px;color:#475569;font-size:14px;line-height:1.8">
          ${benefits.map((b) => `<li>${b}</li>`).join('\n          ')}
          <li>All 60+ Pro tools unlocked</li>
        </ul>

        <!-- CTA -->
        <div style="text-align:center;margin:24px 0 8px">
          <a href="https://gptcleanuptools.com/ai-tools"
             style="display:inline-block;padding:13px 30px;background:linear-gradient(135deg,#7c3aed,#6d28d9);color:#ffffff;border-radius:9999px;text-decoration:none;font-weight:700;font-size:15px">
            Start using Pro →
          </a>
        </div>

        <p style="margin:22px 0 0;color:#64748b;font-size:13px;line-height:1.6">
          Questions or hit a snag? Just reply to this email — a real person reads it and we'll help you out.
        </p>
      </div>

      <p style="text-align:center;margin:18px 0 0;color:#94a3b8;font-size:12px">
        GPT Cleanup Tools · <a href="https://gptcleanuptools.com" style="color:#94a3b8">gptcleanuptools.com</a>
      </p>
    </div>
  </div>`;
}

/**
 * Send the "welcome to Pro" email via Resend. Fires on new subscriptions and on
 * resume/unpause (re-subscribers) — NOT on weekly renewals. Never throws: a
 * failed welcome email must not 500 the webhook and trigger a LemonSqueezy retry.
 */
export async function sendWelcomeEmail(email: string, name: string, plan: string): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[welcome] RESEND_API_KEY missing — skipping welcome email');
    return;
  }
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: email,
      replyTo: REPLY_TO,
      subject: 'Welcome to GPT Cleanup Tools Pro 🎉',
      html: welcomeHtml(name, plan),
    });
    if (error) {
      console.error(`[welcome] Resend failed for ${email}:`, error);
    } else {
      console.log(`[welcome] Welcome email sent to ${email} (plan: ${plan})`);
    }
  } catch (err) {
    console.error(`[welcome] Resend threw for ${email}:`, err);
  }
}

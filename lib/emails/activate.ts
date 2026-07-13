import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

export function activateProHtml(email: string, plan: string): string {
  const planLabel = PLAN_LABELS[plan] ?? 'Pro';
  const quota = PLAN_QUOTA_TEXT[plan] ?? 'All Pro tools & higher limits';
  const signupUrl = `https://gptcleanuptools.com/signup?email=${encodeURIComponent(email)}`;

  return `
  <div style="margin:0;padding:0;background:#f1f5f9">
    <div style="max-width:560px;margin:0 auto;padding:24px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">

      <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);border-radius:16px 16px 0 0;padding:32px 28px;text-align:center">
        <p style="margin:0;color:#ede9fe;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase">GPT Cleanup Tools</p>
        <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:800">Payment received — one step left ✅</h1>
      </div>

      <div style="background:#ffffff;border-radius:0 0 16px 16px;padding:28px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
        <p style="margin:0 0 14px;color:#1e293b;font-size:16px">Hi there,</p>
        <p style="margin:0 0 14px;color:#475569;font-size:15px;line-height:1.6">
          Thanks for subscribing — your <strong>${planLabel} Pro</strong> payment went through.
          To activate it, create your account using <strong>this exact email address</strong>
          (<strong>${email}</strong>). Your Pro plan links up automatically the moment you sign in.
        </p>

        <div style="margin:20px 0;border:1px solid #e2e8f0;border-radius:12px;padding:16px 18px;background:#faf5ff">
          <p style="margin:0;color:#7c3aed;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Your plan</p>
          <p style="margin:6px 0 0;color:#1e293b;font-size:18px;font-weight:700">${planLabel} — ${quota}</p>
        </div>

        <div style="margin:20px 0;border:1px solid #fde68a;border-radius:12px;padding:14px 16px;background:#fffbeb">
          <p style="margin:0;color:#92400e;font-size:13px;line-height:1.6">
            <strong>Important:</strong> sign up with <strong>${email}</strong> — a different
            email won't connect to your subscription.
          </p>
        </div>

        <div style="text-align:center;margin:24px 0 8px">
          <a href="${signupUrl}"
             style="display:inline-block;padding:13px 30px;background:linear-gradient(135deg,#7c3aed,#6d28d9);color:#ffffff;border-radius:9999px;text-decoration:none;font-weight:700;font-size:15px">
            Create my account →
          </a>
        </div>

        <p style="margin:22px 0 0;color:#64748b;font-size:13px;line-height:1.6">
          Already have an account under this email? Just sign in — your Pro plan will be
          waiting. Questions? Reply to this email and a real person will help you out.
        </p>
      </div>

      <p style="text-align:center;margin:18px 0 0;color:#94a3b8;font-size:12px">
        GPT Cleanup Tools · <a href="https://gptcleanuptools.com" style="color:#94a3b8">gptcleanuptools.com</a>
      </p>
    </div>
  </div>`;
}

/**
 * Sent when a subscription payment arrives for an email with no matching
 * account (entitlement parked in pending_subscriptions). Tells the buyer to
 * create their account with the same email so the plan activates. Never
 * throws: a failed email must not 500 the webhook.
 */
export async function sendActivateProEmail(email: string, plan: string): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[activate] RESEND_API_KEY missing — skipping activation email');
    return;
  }
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: email,
      replyTo: REPLY_TO,
      subject: 'Your Pro payment went through — create your account to activate it',
      html: activateProHtml(email, plan),
    });
    if (error) {
      console.error(`[activate] Resend failed for ${email}:`, error);
    } else {
      console.log(`[activate] Activation email sent to ${email} (plan: ${plan})`);
    }
  } catch (err) {
    console.error(`[activate] Resend threw for ${email}:`, err);
  }
}

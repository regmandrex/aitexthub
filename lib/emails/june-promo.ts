/**
 * June price-lock promo email (marketing).
 *
 * Legacy marketing email template. Pro checkout is no longer self-serve, so all
 * calls to action point back to the Pro page instead of a payment provider.
 *
 * MARKETING email — must include an unsubscribe link and sender identity to
 * comply with CAN-SPAM/GDPR and to protect transactional deliverability. The
 * {{unsubscribe}} token must be replaced by the sending platform with a real
 * one-click unsubscribe URL. Send from a MARKETING sender/subdomain, not the
 * transactional support@ address used for verification/reset.
 */

export type PromoAudience = 'returning' | 'new';

export function junePromoSubject(audience: PromoAudience): string {
  return audience === 'returning'
    ? 'Your Pro price is about to go up — lock in June rate 🔒'
    : 'Go ad-free + humanize AI text — June rate ends soon 🚀';
}

export function junePromoHtml(name: string, audience: PromoAudience): string {
  const greeting = name && name.trim() ? name.trim().split(' ')[0] : 'there';
  const isReturning = audience === 'returning';

  const intro = isReturning
    ? `Thank you for being an AI Text Cleanup Tools Pro member — it genuinely means a lot. 💜 As a thank-you, we want you to keep the lowest rate before our prices rise.`
    : `Thanks for joining AI Text Cleanup Tools — you've cleaned up some text with us, and we think you'll love what Pro unlocks. 💜`;

  return `
  <div style="margin:0;padding:24px 12px;background:#f1f5f9">
    <div style="max-width:600px;margin:0 auto;border-radius:16px;overflow:hidden;box-shadow:0 1px 4px rgba(15,23,42,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">

      <!-- Hero -->
      <div style="background:linear-gradient(135deg,#7c3aed 0%,#6d28d9 50%,#4f46e5 100%);padding:40px 28px;text-align:center">
        <p style="margin:0;color:#ddd6fe;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase">AI Text Cleanup Tools Pro</p>
        <h1 style="margin:10px 0 0;color:#ffffff;font-size:30px;font-weight:800;line-height:1.2">
          Hi ${greeting}, lock in your June rate 🔒
        </h1>
        <p style="margin:14px auto 0;max-width:440px;color:#ede9fe;font-size:15px;line-height:1.6">
          Our prices are going up after June. Subscribe now and you'll pay
          <strong style="color:#fde047">about 30% less</strong> than the new price — for as long as you stay subscribed.
        </p>
        <div style="margin:24px 0 4px">
          <a href="https://aitextcleanuptools.com/pro#pricing"
             style="display:inline-block;padding:15px 38px;background:#fde047;color:#1e1b4b;border-radius:9999px;text-decoration:none;font-weight:800;font-size:16px">
            See all plans →
          </a>
        </div>
        <p style="margin:10px 0 0;color:#c4b5fd;font-size:12px">Offer ends June 30 · Cancel anytime</p>
      </div>

      <!-- Body -->
      <div style="background:#ffffff;padding:32px 28px">
        <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.6">${intro}</p>

        <!-- Ad-free highlight -->
        <div style="margin:0 0 22px;border:2px solid #ede9fe;border-radius:14px;padding:18px 20px;background:#faf5ff">
          <p style="margin:0;color:#6d28d9;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.5px">The best part</p>
          <p style="margin:8px 0 0;color:#1e293b;font-size:17px;font-weight:700;line-height:1.4">
            Pro is 100% ad-free 🚫 — no banners, no pop-ups, no interruptions. Just you and the tools.
          </p>
        </div>

        <p style="margin:0 0 10px;color:#1e293b;font-size:16px;font-weight:800">Why our AI Humanizer Pro wins:</p>
        <ul style="margin:0 0 24px;padding-left:18px;color:#475569;font-size:15px;line-height:1.9">
          <li><strong>Cheapest and most efficient</strong> humanizer around — from just <strong>$3.99/week</strong></li>
          <li>Powered by <strong>Claude + GPT-4</strong>, not basic word-swapping</li>
          <li>Passes <strong>99% of detectors</strong> — Turnitin, GPTZero, Originality.ai, Copyleaks</li>
          <li><strong>Zero ads</strong>, higher limits, priority processing, API access</li>
          <li>Unlocks <strong>all 60+ Pro tools</strong> — humanizers, watermark removers, detectors and more</li>
        </ul>

        <!-- Plans -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px">
          <tr>
            <td style="padding:6px">
              <div style="border:1px solid #e2e8f0;border-radius:12px;padding:14px;text-align:center">
                <p style="margin:0;color:#64748b;font-size:12px;font-weight:700">WEEKLY</p>
                <p style="margin:6px 0 0;color:#1e293b;font-size:20px;font-weight:800">$3.99</p>
                <p style="margin:2px 0 10px;color:#94a3b8;font-size:11px">per week</p>
                <a href="https://aitextcleanuptools.com/pro#pricing" style="display:inline-block;padding:9px 16px;background:#7c3aed;color:#fff;border-radius:9999px;text-decoration:none;font-weight:700;font-size:13px">View Weekly</a>
              </div>
            </td>
            <td style="padding:6px">
              <div style="border:1px solid #e2e8f0;border-radius:12px;padding:14px;text-align:center">
                <p style="margin:0;color:#64748b;font-size:12px;font-weight:700">MONTHLY</p>
                <p style="margin:6px 0 0;color:#1e293b;font-size:20px;font-weight:800">$17.99</p>
                <p style="margin:2px 0 10px;color:#94a3b8;font-size:11px">per month</p>
                <a href="https://aitextcleanuptools.com/pro#pricing" style="display:inline-block;padding:9px 16px;background:#7c3aed;color:#fff;border-radius:9999px;text-decoration:none;font-weight:700;font-size:13px">View Monthly</a>
              </div>
            </td>
            <td style="padding:6px">
              <div style="border:2px solid #7c3aed;border-radius:12px;padding:14px;text-align:center;background:#faf5ff">
                <p style="margin:0;color:#6d28d9;font-size:12px;font-weight:800">ANNUAL · BEST VALUE</p>
                <p style="margin:6px 0 0;color:#1e293b;font-size:20px;font-weight:800">$10.25</p>
                <p style="margin:2px 0 10px;color:#94a3b8;font-size:11px">per month · billed $122.99/yr</p>
                <a href="https://aitextcleanuptools.com/pro#pricing" style="display:inline-block;padding:9px 16px;background:#6d28d9;color:#fff;border-radius:9999px;text-decoration:none;font-weight:800;font-size:13px">View Annual</a>
              </div>
            </td>
          </tr>
        </table>

        <p style="margin:0;color:#64748b;font-size:13px;line-height:1.6;text-align:center">
          These are the current rates. After June they go up — subscribe now to keep paying this price.
        </p>
      </div>

      <!-- Footer (required for marketing email) -->
      <div style="background:#1e293b;padding:24px 28px;text-align:center">
        <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.7">
          AI Text Cleanup Tools · <a href="https://aitextcleanuptools.com" style="color:#c4b5fd;text-decoration:none">AI Text Cleanup Tools</a><br/>
          You're receiving this because you created an AI Text Cleanup Tools account.<br/>
          <a href="{{unsubscribe}}" style="color:#94a3b8;text-decoration:underline">Unsubscribe</a> from promotional emails at any time.
        </p>
      </div>

    </div>
  </div>`;
}

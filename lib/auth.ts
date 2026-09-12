import { betterAuth } from 'better-auth';
import { Pool } from 'pg';
import { Resend } from 'resend';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  database: pool,
  baseURL: process.env.BETTER_AUTH_URL ?? 'http://localhost:3000',
  advanced: {
    useSecureCookies: process.env.NODE_ENV === 'production',
    cookiePrefix: process.env.NODE_ENV === 'production' ? '__Host-' : undefined,
    defaultCookieAttributes: {
      sameSite: 'lax',
    },
  },
  trustedOrigins: [
    'http://localhost:3000',
    'https://aitextcleanuptools.com',
    'https://www.aitextcleanuptools.com',
  ],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: 'AI Text Cleanup Tools <noreply@aitextcleanuptools.com>',
        to: user.email,
        // Sent from an unmonitored noreply address, but route any replies to
        // support so users who hit "reply" still reach a real inbox.
        replyTo: 'support@aitextcleanuptools.com',
        subject: 'Reset your password',
        html: `<p>Click <a href="${url}">here</a> to reset your password. This link expires in 1 hour.</p>`,
      });
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: 'AI Text Cleanup Tools <noreply@aitextcleanuptools.com>',
        to: user.email,
        // Replies to this noreply address are routed to support.
        replyTo: 'support@aitextcleanuptools.com',
        subject: 'Verify your email — AI Text Cleanup Tools',
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
            <h2 style="color:#1e293b">Verify your email</h2>
            <p style="color:#475569">Thanks for signing up! Click the button below to verify your email address.</p>
            <a href="${url}" style="display:inline-block;margin-top:16px;padding:12px 24px;background:#7c3aed;color:#fff;border-radius:9999px;text-decoration:none;font-weight:600">Verify email</a>
            <p style="margin-top:24px;color:#94a3b8;font-size:12px">If you didn't create an account, you can ignore this email.</p>
          </div>
        `,
      });
    },
    autoSignInAfterVerification: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ['google'],
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 3,
    updateAge: 60 * 60 * 24,
  },
  rateLimit: {
    enabled: true,
    window: 60,
    max: 20,
    customRules: {
      '/sign-in/email': { window: 60, max: 5 },
      '/sign-up/email': { window: 60, max: 5 },
      '/forget-password': { window: 60 * 10, max: 3 },
      '/reset-password': { window: 60 * 10, max: 5 },
      '/send-verification-email': { window: 60 * 10, max: 3 },
    },
  },
});

export type Session = typeof auth.$Infer.Session;

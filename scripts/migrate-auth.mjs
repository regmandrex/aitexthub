import { betterAuth } from 'better-auth';

const auth = betterAuth({
  baseURL: 'http://localhost:3000',
  secret: 'a9f2c1e8b3d74f6a0e5c2b9d1f8a3e7c',
  database: {
    provider: 'pg',
    url: process.env.DATABASE_URL,
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
});

await auth.api.runMigrations().catch(console.error);
console.log('Migration complete');

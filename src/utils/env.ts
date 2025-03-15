import { z } from "zod";

const envSchema = z.object({
  POSTGRES_URL: z.string(),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
  AUTH_RESEND_KEY: z.string(),
  AUTH_RESEND_FROM: z.string(),
  AUTH_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);

import { env } from "@/utils/env";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(env.POSTGRES_URL);
const db = drizzle({ client: sql });

export { db, sql };

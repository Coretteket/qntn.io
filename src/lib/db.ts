import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { createId } from '@paralleldrive/cuid2';
import * as sql from "drizzle-orm/sqlite-core";

const client = createClient({
  url: import.meta.env.DATABASE_URL,
  authToken: import.meta.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client);

export const redirect = sql.sqliteTable("redirect", {
  id: sql.text("id").primaryKey().$default(createId),
  slug: sql.text("slug").notNull(),
  url: sql.text("url").notNull(),
});

export * as d from "drizzle-orm";
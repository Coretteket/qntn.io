import { db, redirect } from "@/lib/db";
import { eq } from "drizzle-orm";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug as string;

  const url = await db
    .select({ url: redirect.url })
    .from(redirect)
    .where(eq(redirect.slug, slug))
    .limit(1)
    .then(([r]) => r.url)
    .catch(() => null);

  if (!url) return new Response("Not found", { status: 404 });

  return Response.redirect(url);
};

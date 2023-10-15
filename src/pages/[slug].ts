import { kv } from "@/lib/kv";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug as string;

  const url = await kv.hget("url_map", slug);

  if (!url) return new Response("Not found", { status: 404 });

  return Response.redirect(url as string);
};

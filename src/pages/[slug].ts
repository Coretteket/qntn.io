import { kv } from "@/lib/kv";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, redirect }) => {
  const url = await kv.hGet("url_map", params.slug!);
  if (!url || typeof url !== 'string') return new Response("Not found", { status: 404 });
  return redirect(url);
};

import { kv } from "@/lib/kv";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, redirect }) => {
  const path = params.slug;
  if (!path) return new Response("Not found", { status: 404 });

  let url = await kv.hGet("url_map", path);
  if (url && typeof url === "string") return redirect(url);

  const firstPart = path.split("/")[0];
  url = await kv.hGet("url_map", firstPart + "/*");
  if (url && typeof url === "string") {
    const wildcard = path.slice(firstPart.length + 1);
    return redirect(url.replace("*", wildcard));
  }

  return new Response("Not found", { status: 404 });
};

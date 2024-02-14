import { kv } from "@/lib/kv";
import { isValidURL, verifyToken } from "@/lib/server";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const requestURL = new URL(request.url).origin;

  const authed = verifyToken(cookies.get("token")?.value);
  if (!authed)
    return redirect(
      `${requestURL}/slugs?error=You need to be authenticated to edit slugs.`,
    );

  const formData = await request.formData();

  const slug = formData.get("slug");
  const url = formData.get("url");

  if (!slug || typeof slug !== "string")
    return redirect(`${requestURL}/slugs?error=Invalid slug.`);

  if (!url || typeof url !== "string" || !isValidURL(url))
    return redirect(
      `${requestURL}/slugs?error=Invalid URL for slug '${slug}'.`,
    );

  try {
    await kv.hset("url_map", { [slug]: url });
  } catch (e) {
    return redirect(
      `${requestURL}/slugs?error=Something went wrong with updating '${slug}'.`,
    );
  }

  return redirect(`${requestURL}/slugs`);
};

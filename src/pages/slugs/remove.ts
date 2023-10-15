import { kv } from "@/lib/kv";
import { verifyToken } from "@/lib/server";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  const requestURL = new URL(request.url).origin;

  const authed = verifyToken(cookies.get("token")?.value);
  if (!authed)
    return Response.redirect(
      `${requestURL}/slugs?error=You need to be authenticated to remove slugs.`,
    );

  const formData = await request.formData();

  const slug = formData.get("slug");

  if (!slug || typeof slug !== "string")
    return Response.redirect(`${requestURL}/slugs?error=Invalid slug id.`);

  try {
    await kv.hdel("url_map", slug);
  } catch (e) {
    return Response.redirect(
      `${requestURL}/slugs?error=Something went wrong with removing '${slug}'.`,
    );
  }

  return Response.redirect(`${requestURL}/slugs`);
};

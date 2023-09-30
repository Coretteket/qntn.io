import { db, redirect } from "@/lib/db";
import { comparePassword, getToken, isValidURL, verifyToken } from "@/lib/server";
import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";

export const POST: APIRoute = async ({ request, cookies }) => {
  const requestURL = new URL(request.url).origin;

  const authed = verifyToken(cookies.get("token")?.value);
  if (!authed)
    return Response.redirect(
      `${requestURL}/slugs?error=You need to be authenticated to add slugs.`,
    );

  const formData = await request.formData();

  const slug = formData.get("slug");
  const url = formData.get("url");

  if (!slug || typeof slug !== "string")
    return Response.redirect(`${requestURL}/slugs?error=Invalid slug.`);

  if (!url || typeof url !== "string" || !isValidURL(url))
    return Response.redirect(`${requestURL}/slugs?error=Invalid URL for slug '${slug}'.`);

  try {
    await db.insert(redirect).values({ slug, url });
  } catch (e) {
    return Response.redirect(
      `${requestURL}/slugs?error=Something went wrong with adding '${slug}'.`,
    );
  }

  return Response.redirect(`${requestURL}/slugs`);
};
import { db, redirect } from "@/lib/db";
import { comparePassword, getToken, verifyToken } from "@/lib/server";
import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";

export const POST: APIRoute = async ({ request, cookies }) => {
  const requestURL = new URL(request.url).origin;

  const authed = verifyToken(cookies.get("token")?.value);
  if (!authed)
    return Response.redirect(
      `${requestURL}/slugs?error=You need to be authenticated to remove slugs.`,
    );

  const formData = await request.formData();

  const id = formData.get("id");
  const slug = formData.get("slug");

  if (!id || typeof id !== "string")
    return Response.redirect(`${requestURL}/slugs?error=Invalid slug id.`);

  try {
    await db.delete(redirect).where(eq(redirect.id, id));
  } catch (e) {
    return Response.redirect(
      `${requestURL}/slugs?error=Something went wrong with removing '${slug}'.`,
    );
  }

  return Response.redirect(`${requestURL}/slugs`);
};

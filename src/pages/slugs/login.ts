import { comparePassword, getToken } from "@/lib/server";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  const requestURL = new URL(request.url).origin;

  const formData = await request.formData();
  const password = formData.get("password");

  if (!password || typeof password !== "string")
    return Response.redirect(`${requestURL}/slugs?error=No password provided.`);

  const success = await comparePassword(password);

  if (!success)
    return Response.redirect(`${requestURL}/slugs?error=Incorrect password.`);

  cookies.set("token", getToken(), {
    path: "/",
    maxAge: 2592000,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return Response.redirect(`${requestURL}/slugs`);
};

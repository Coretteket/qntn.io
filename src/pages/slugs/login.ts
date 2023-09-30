import { db, redirect } from "@/lib/db";
import { comparePassword, getToken } from "@/lib/server";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const requestURL = new URL(request.url).origin;

  const formData = await request.formData();
  const password = formData.get("password");

  if (!password || typeof password !== "string")
    return Response.redirect(`${requestURL}/slugs?error=No password provided.`);

  const success = await comparePassword(password);

  // await db.insert(redirect).values([
  //   { slug: "test", url: "https://example.com" },
  //   { slug: "twitter", url: "https://twitter.com/coretteket" },
  //   { slug: "github", url: "https://github.com/coretteket" },
  // ]);

  if (!success)
    return Response.redirect(`${requestURL}/slugs?error=Incorrect password.`);

  return new Response(null, {
    headers: {
      "Set-Cookie": `token=${getToken()}; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Strict`,
      Location: `${requestURL}/slugs`,
    },
    status: 302,
  });
};

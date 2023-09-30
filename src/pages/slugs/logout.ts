import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  const requestURL = new URL(request.url).origin;

  cookies.delete("token", { path: "/" });

  return Response.redirect(`${requestURL}/slugs`);
};

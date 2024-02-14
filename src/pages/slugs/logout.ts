import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const requestURL = new URL(request.url).origin;

  cookies.delete("token", { path: "/" });

  return redirect(`${requestURL}/slugs`);
};

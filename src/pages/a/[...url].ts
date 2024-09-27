import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, redirect }) => {
  return redirect(`https://archive.is/newest/${params.url!}`, 308);
};

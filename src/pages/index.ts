import type { APIContext } from "astro";

export async function GET({ request }: APIContext) {
  const acceptLanguage = request.headers.get("Accept-Language") ?? "nl";
  const locale = acceptLanguage.includes("nl") ? "nl" : "en";
  const response = await fetch("http://localhost:4321/" + locale);
  const body = await response.text();
  return new Response(body, response);
}

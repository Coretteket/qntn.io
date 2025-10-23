import type { APIContext } from "astro";

export async function GET({ preferredLocale }: APIContext) {
  const language = preferredLocale?.includes("nl") ? "nl" : "en";
  const response = await fetch("http://localhost:4321/" + language);
  const body = await response.text();
  return new Response(body, response);
}

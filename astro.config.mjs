import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solid()],
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24 * 31, // 31 days
      bypassToken: import.meta.env.BYPASS_TOKEN,
      exclude: ['/slugs', '/slugs/add', '/slugs/edit', '/slugs/login', '/slugs/logout', '/slugs/remove']
    }
  }),
  output: "server"
});
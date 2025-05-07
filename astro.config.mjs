import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  integrations: [solid()],
  adapter: node({ mode: "standalone" }),
  output: "server",
});

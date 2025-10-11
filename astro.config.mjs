import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  i18n: { locales: ["en", "nl"], defaultLocale: "nl" },
  vite: { plugins: [tailwindcss()] },
  adapter: node({ mode: "standalone" }),
  output: "server",
});

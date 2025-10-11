import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  i18n: { locales: ["en", "nl"], defaultLocale: "nl" },
  vite: {
    define: { BUILD_DATE: JSON.stringify(new Date().toISOString()) },
    plugins: [tailwindcss()],
  },
  adapter: node({ mode: "standalone" }),
  output: "server",
});

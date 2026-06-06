import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://redexauser.github.io",
  base: "/ecodays2026",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

// @ts-check
import { defineConfig } from "astro/config";
import Analytics from "@vercel/analytics/astro";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://wicksipedia.github.io",
	base: "/au-dev-events",
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});

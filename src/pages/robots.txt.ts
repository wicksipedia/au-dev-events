import type { APIRoute } from "astro";
import { SITE } from "@/config";

export const GET: APIRoute = () => {
	const sitemapUrl = new URL("sitemap-index.xml", SITE.website);
	return new Response(
		`User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`,
		{ headers: { "Content-Type": "text/plain; charset=utf-8" } },
	);
};

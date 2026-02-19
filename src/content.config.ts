import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const events = defineCollection({
	loader: glob({ pattern: "[^_]*.md", base: "./src/data/events" }),
	schema: z.object({
		name: z.string(),
		location: z.object({
			city: z.string(),
			state: z.enum(["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT", "ACT"]),
			venue: z.string().optional(),
			latitude: z.number().optional(),
			longitude: z.number().optional(),
		}),
		startDate: z.coerce.date(),
		endDate: z.coerce.date(),
		cost: z.string(),
		tags: z.array(z.string()),
		hasWorkshops: z.boolean().default(false),
		url: z.string().url(),
	}),
});

export const collections = { events };

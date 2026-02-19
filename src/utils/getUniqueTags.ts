import type { CollectionEntry } from "astro:content";

export function getUniqueTags(events: CollectionEntry<"events">[]): string[] {
	const tags = new Set<string>();
	for (const event of events) {
		for (const tag of event.data.tags) {
			tags.add(tag);
		}
	}
	return [...tags].sort();
}

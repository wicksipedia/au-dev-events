import type { CollectionEntry } from "astro:content";

export function getEventsByTag(
	events: CollectionEntry<"events">[],
	tag: string,
): CollectionEntry<"events">[] {
	return events.filter((event) => event.data.tags.includes(tag));
}

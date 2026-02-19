import type { CollectionEntry } from "astro:content";

export function getUpcomingEvents(
	events: CollectionEntry<"events">[],
): CollectionEntry<"events">[] {
	const now = new Date();
	return events
		.filter((event) => event.data.endDate >= now)
		.sort((a, b) => a.data.startDate.getTime() - b.data.startDate.getTime());
}

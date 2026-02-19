export const SITE = {
	website: "https://wicksipedia.github.io/au-dev-events/",
	title: "AU Dev Events",
	desc: "Australian software developer events, conferences, and meetups.",
	author: "Matt Wicks",
	lightAndDarkMode: true,
	timezone: "Australia/Sydney",
	eventsPerPage: 12,
} as const;

export const STATES = [
	"NSW",
	"VIC",
	"QLD",
	"SA",
	"WA",
	"TAS",
	"NT",
	"ACT",
] as const;

export type AustralianState = (typeof STATES)[number];

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export function formatDate(date: Date): string {
	return dayjs(date).format("D MMM YYYY");
}

export function formatDateRange(start: Date, end: Date): string {
	const s = dayjs(start);
	const e = dayjs(end);

	if (s.isSame(e, "day")) {
		return s.format("D MMM YYYY");
	}

	if (s.isSame(e, "month")) {
		return `${s.format("D")}–${e.format("D MMM YYYY")}`;
	}

	if (s.isSame(e, "year")) {
		return `${s.format("D MMM")}–${e.format("D MMM YYYY")}`;
	}

	return `${s.format("D MMM YYYY")}–${e.format("D MMM YYYY")}`;
}

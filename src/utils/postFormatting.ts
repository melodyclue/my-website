import { format } from "date-fns";

export function formatPostDate(input: string | Date, pattern = "yyyy年M月d日") {
	const date = typeof input === "string" ? new Date(input) : input;

	if (Number.isNaN(date.getTime())) {
		return "";
	}

	return format(date, pattern);
}

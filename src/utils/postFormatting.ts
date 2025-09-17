import { format } from "date-fns";

export function formatPostDate(input: string | Date, pattern = "yyyy年M月d日") {
	const date = typeof input === "string" ? new Date(input) : input;

	if (Number.isNaN(date.getTime())) {
		return "";
	}

	return format(date, pattern);
}

export function estimateReadingTime(content: string) {
	const normalized = content.replace(/[`*_>#-]/g, "");
	const characters = normalized.replace(/\s+/g, "");
	const wordLikeUnits = normalized.trim().split(/\s+/).filter(Boolean).length;
	const estimatedWords = Math.max(characters / 2, wordLikeUnits);
	const minutes = Math.max(1, Math.round(estimatedWords / 350));

	return minutes;
}

export function createExcerpt(content: string, maxLength = 140) {
	const sanitized = content
		.replace(/```[\s\S]*?```/g, "")
		.replace(/^#.*$/gm, "")
		.replace(/\*\*(.*?)\*\*/g, "$1")
		.replace(/\*(.*?)\*/g, "$1")
		.replace(/`(.*?)`/g, "$1")
		.replace(/>\s?/g, "")
		.replace(/\s+/g, " ")
		.trim();

	if (!sanitized) {
		return "";
	}

	if (sanitized.length <= maxLength) {
		return sanitized;
	}

	return `${sanitized.slice(0, maxLength - 3)}...`;
}

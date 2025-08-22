"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { Calendar } from "lucide-react";
import Link from "next/link";

export const ContactButton = () => {
	const handleClick = () => {
		sendGAEvent("event", "ContactButtonClicked");
	};

	return (
		<Link
			href="https://cal.com/melodylcue/meeting"
			className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition-colors shadow-sm"
			target="_blank"
			rel="noopener noreferrer"
			onClick={handleClick}
		>
			<Calendar size={16} />
			無料相談を予約
		</Link>
	);
};

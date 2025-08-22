"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { Calendar } from "lucide-react";

export const ContactButton = () => {
  const handleClick = () => {
    sendGAEvent({
      event: "ContactButtonClicked",
    });
  };

  return (
              <a
                href="https://cal.com/melodylcue/meeting"
                className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
              >
                <Calendar size={16} />
                無料相談を予約する
              </a>
  );
};

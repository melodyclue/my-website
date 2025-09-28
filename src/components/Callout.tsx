import { AlertCircle, Info, Lightbulb, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

interface CalloutProps {
	type?: "info" | "warning" | "error" | "tip";
	title?: string;
	children: ReactNode;
}

const calloutConfig = {
	info: {
		icon: Info,
		bgColor: "bg-blue-50",
		borderColor: "border-blue-200",
		iconColor: "text-blue-600",
		titleColor: "text-blue-900",
		textColor: "text-blue-800",
	},
	warning: {
		icon: TriangleAlert,
		bgColor: "bg-yellow-50",
		borderColor: "border-yellow-200",
		iconColor: "text-yellow-600",
		titleColor: "text-yellow-900",
		textColor: "text-yellow-800",
	},
	error: {
		icon: AlertCircle,
		bgColor: "bg-red-50",
		borderColor: "border-red-200",
		iconColor: "text-red-600",
		titleColor: "text-red-900",
		textColor: "text-red-800",
	},
	tip: {
		icon: Lightbulb,
		bgColor: "bg-green-50",
		borderColor: "border-green-200",
		iconColor: "text-green-600",
		titleColor: "text-green-900",
		textColor: "text-green-800",
	},
};

export default function Callout({
	type = "info",
	title,
	children,
}: CalloutProps) {
	const config = calloutConfig[type];
	const Icon = config.icon;

	return (
		<div
			className={`p-4 rounded-lg border-l-4 ${config.bgColor} ${config.borderColor} my-6`}
		>
			<div className="flex items-start gap-3">
				<Icon
					size={20}
					className={`${config.iconColor} flex-shrink-0 mt-0.5`}
				/>
				<div className="flex-1">
					{title && (
						<h4 className={`font-semibold ${config.titleColor} mb-2`}>
							{title}
						</h4>
					)}
					<div className={`prose prose-sm max-w-none`}>{children}</div>
				</div>
			</div>
		</div>
	);
}

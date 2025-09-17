import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = {
	label: string;
	href: string;
};

type BreadcrumbProps = {
	items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
	if (items.length === 0) return null;

	return (
		<nav className="mb-8">
			<div className="flex items-center gap-2 text-sm">
				{items.map((item, index) => (
					<div key={item.href} className="flex items-center gap-2">
						{index > 0 && (
							<span className="text-zinc-400">/</span>
						)}
						<Link
							href={item.href}
							className="group inline-flex items-center gap-2 px-3 py-2 font-medium text-zinc-600 hover:text-zinc-800 transition-colors"
						>
							{index === 0 && (
								<ArrowLeft
									size={16}
									className="transition-transform duration-200 group-hover:-translate-x-1"
								/>
							)}
							{item.label}
						</Link>
					</div>
				))}
			</div>
		</nav>
	);
}
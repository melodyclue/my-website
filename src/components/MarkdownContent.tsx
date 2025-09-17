import type { ReactNode } from "react";

type MarkdownBlock =
	| { type: "heading"; level: number; content: string }
	| { type: "paragraph"; content: string }
	| { type: "list"; ordered: boolean; items: string[] }
	| { type: "code"; language?: string; content: string }
	| { type: "quote"; content: string };

function parseMarkdown(markdown: string): MarkdownBlock[] {
	const blocks: MarkdownBlock[] = [];
	const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
	let paragraphBuffer: string[] = [];
	let listBuffer: { ordered: boolean; items: string[] } | null = null;
	let codeBuffer: string[] | null = null;
	let codeLanguage = "";

	const pushParagraph = () => {
		if (!paragraphBuffer.length) return;
		blocks.push({ type: "paragraph", content: paragraphBuffer.join(" ") });
		paragraphBuffer = [];
	};

	const pushList = () => {
		if (!listBuffer || !listBuffer.items.length) return;
		blocks.push({ type: "list", ordered: listBuffer.ordered, items: listBuffer.items });
		listBuffer = null;
	};

	const pushCode = () => {
		if (!codeBuffer) return;
		blocks.push({ type: "code", language: codeLanguage, content: codeBuffer.join("\n") });
		codeBuffer = null;
		codeLanguage = "";
	};

	for (const rawLine of lines) {
		const line = rawLine.trimEnd();

		if (line.startsWith("```")) {
			if (codeBuffer) {
				pushCode();
			} else {
				pushParagraph();
				pushList();
				codeBuffer = [];
				codeLanguage = line.slice(3).trim();
			}
			continue;
		}

		if (codeBuffer) {
			codeBuffer.push(rawLine);
			continue;
		}

		if (!line.trim()) {
			pushParagraph();
			pushList();
			continue;
		}

		const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
		if (headingMatch) {
			pushParagraph();
			pushList();
			const level = headingMatch[1].length;
			const content = headingMatch[2].trim();
			blocks.push({ type: "heading", level, content });
			continue;
		}

		if (line.startsWith(">")) {
			pushParagraph();
			pushList();
			blocks.push({ type: "quote", content: line.replace(/^>\s?/, "").trim() });
			continue;
		}

		const unorderedMatch = line.match(/^[-*]\s+(.+)/);
		if (unorderedMatch) {
			pushParagraph();
			if (!listBuffer) {
				listBuffer = { ordered: false, items: [] };
			}
			listBuffer.items.push(unorderedMatch[1]);
			continue;
		}

		const orderedMatch = line.match(/^\d+\.\s+(.+)/);
		if (orderedMatch) {
			pushParagraph();
			if (!listBuffer) {
				listBuffer = { ordered: true, items: [] };
			}
			listBuffer.items.push(orderedMatch[1]);
			continue;
		}

		paragraphBuffer.push(line.trim());
	}

	pushParagraph();
	pushList();
	pushCode();

	return blocks;
}

function renderInline(text: string): ReactNode[] {
	const nodes: ReactNode[] = [];
	const tokenRegex = /(!?\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*|`.*?`)/g;
	let lastIndex = 0;
	let match: RegExpExecArray | null;

	while ((match = tokenRegex.exec(text)) !== null) {
		if (match.index > lastIndex) {
			nodes.push(text.slice(lastIndex, match.index));
		}

		const token = match[0];
		if (token.startsWith("`")) {
			nodes.push(
				<code
					key={`${match.index}-code`}
					className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900"
				>
					{token.slice(1, -1)}
				</code>,
			);
		} else if (token.startsWith("**")) {
			nodes.push(
				<strong key={`${match.index}-strong`} className="font-semibold text-zinc-900">
					{renderInline(token.slice(2, -2))}
				</strong>,
			);
		} else if (token.startsWith("*")) {
			nodes.push(
				<em key={`${match.index}-em`} className="text-zinc-800">
					{renderInline(token.slice(1, -1))}
				</em>,
			);
		} else if (token.startsWith("![")) {
			const imageMatch = token.match(/^!\[(.*?)]\((.*?)\)$/);
			if (imageMatch) {
				nodes.push(
					<span key={`${match.index}-image`} className="inline-block rounded border border-zinc-200 bg-zinc-50 px-2 py-1 text-sm text-zinc-500">
						{imageMatch[1]}
					</span>,
				);
			}
		} else if (token.startsWith("[")) {
			const linkMatch = token.match(/^\[(.*?)]\((.*?)\)$/);
			if (linkMatch) {
				nodes.push(
					<a
						key={`${match.index}-link`}
						href={linkMatch[2]}
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-blue-600 underline decoration-dotted underline-offset-4 hover:text-blue-700"
					>
						{renderInline(linkMatch[1])}
					</a>,
				);
			}
		}

		lastIndex = tokenRegex.lastIndex;
	}

	if (lastIndex < text.length) {
		nodes.push(text.slice(lastIndex));
	}

	return nodes;
}

const headingClassMap: Record<number, string> = {
	1: "text-3xl font-semibold text-black",
	2: "text-2xl font-semibold text-black",
	3: "text-xl font-semibold text-zinc-900",
	4: "text-lg font-semibold text-zinc-800",
	5: "text-base font-semibold uppercase tracking-wide text-zinc-700",
	6: "text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500",
};

export function MarkdownContent({ content }: { content: string }) {
	const blocks = parseMarkdown(content);

	return (
		<div className="flex flex-col gap-8 text-base leading-relaxed text-zinc-700">
			{blocks.map((block, index) => {
				switch (block.type) {
					case "heading": {
						const HeadingTag = `h${Math.min(block.level + 1, 6)}` as keyof JSX.IntrinsicElements;
						return (
							<HeadingTag
								key={`heading-${index}`}
								className={`${headingClassMap[block.level] ?? headingClassMap[3]} mt-2`}
							>
								{renderInline(block.content)}
							</HeadingTag>
						);
					}
					case "paragraph": {
						return (
							<p key={`paragraph-${index}`} className="text-base leading-relaxed text-zinc-700">
								{renderInline(block.content)}
							</p>
						);
					}
					case "list": {
						const ListTag = block.ordered ? "ol" : "ul";
						return (
							<ListTag
								key={`list-${index}`}
								className={`${block.ordered ? "list-decimal" : "list-disc"} space-y-2 pl-6 text-base leading-relaxed text-zinc-700`}
							>
								{block.items.map((item, itemIndex) => (
									<li key={`list-${index}-item-${itemIndex}`}>{renderInline(item)}</li>
								))}
							</ListTag>
						);
					}
					case "code": {
						return (
							<pre
								key={`code-${index}`}
								className="overflow-x-auto rounded-2xl bg-zinc-950/90 p-5 text-sm text-zinc-100 shadow-inner"
							>
								<code className="block whitespace-pre">{block.content}</code>
							</pre>
						);
					}
					case "quote": {
						return (
							<blockquote
								key={`quote-${index}`}
								className="rounded-2xl border-l-4 border-blue-200 bg-blue-50/70 px-6 py-4 text-base italic text-blue-900"
							>
								{renderInline(block.content)}
							</blockquote>
						);
					}
					default:
						return null;
				}
			})}
		</div>
	);
}

export default MarkdownContent;

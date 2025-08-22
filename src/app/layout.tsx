import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Reo Yamashita - Freelance Frontend Developer",
	description: "フリーランスのフロントエンドエンジニア。TypeScriptを使った中規模アプリケーション開発、レガシー環境のモダン化、決済システム構築まで対応。",
	keywords: ["フロントエンドエンジニア", "TypeScript", "React", "Next.js", "フリーランス", "Webアプリケーション開発"],
	authors: [{ name: "Reo Yamashita" }],
	creator: "Reo Yamashita",
	openGraph: {
		title: "Reo Yamashita - Freelance Frontend Developer",
		description: "フリーランスのフロントエンドエンジニア。TypeScriptを使った中規模アプリケーション開発、レガシー環境のモダン化、決済システム構築まで対応。",
		url: "https://melody.dev",
		siteName: "Reo Yamashita",
		locale: "ja_JP",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Reo Yamashita - Freelance Frontend Developer",
		description: "フリーランスのフロントエンドエンジニア。TypeScriptを使った中規模アプリケーション開発、レガシー環境のモダン化、決済システム構築まで対応。",
		creator: "@melodyclue",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<head>
				<GoogleAnalytics gaId="G-B4HJMDNC9E" />
			</head>
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	);
}

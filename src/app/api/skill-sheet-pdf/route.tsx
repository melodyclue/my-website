import { randomUUID } from "node:crypto";
import path from "node:path";
import {
	Document,
	Font,
	Page,
	pdf,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";

const dir = path.resolve("./public", "fonts");

Font.register({
	family: "NotoSansJP",
	fonts: [
		{
			src: `${dir}/NotoSansJP-Regular.ttf`,
			fontWeight: 400,
		},
		{
			src: `${dir}/NotoSansJP-Medium.ttf`,
			fontWeight: 500,
		},
	],
});

// disable hyphenation
Font.registerHyphenationCallback((word) =>
	Array.from(word).flatMap((char) => [char, ""]),
);

const styles = StyleSheet.create({
	page: {
		fontSize: 12,
		fontFamily: "NotoSansJP",
		flexDirection: "column",
		backgroundColor: "#ffffff",
		padding: 30,
	},
	header: {
		marginBottom: 20,
		borderBottom: "1pt solid #333",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
		lineHeight: 1.8,
		textAlign: "center",
		color: "#333",
	},
	basicInfo: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginBottom: 20,
		gap: 15,
	},
	infoItem: {
		flexDirection: "row",
		width: "45%",
		marginBottom: 5,
	},
	infoLabel: {
		fontSize: 11,
		fontWeight: "bold",
		width: 60,
		color: "#555",
	},
	infoValue: {
		fontSize: 11,
		flex: 1,
	},
	section: {
		marginBottom: 15,
	},
	sectionTitle: {
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 8,
		color: "#333",
		borderBottom: "1pt solid #666",
		paddingBottom: 8,
	},
	text: {
		fontSize: 11,
		lineHeight: 1.4,
		marginBottom: 4,
		color: "#333",
	},
	projectContainer: {
		marginBottom: 12,
		border: "1pt solid #ddd",
		padding: 8,
		backgroundColor: "#fafafa",
	},
	projectPeriod: {
		fontSize: 11,
		color: "#666",
		marginBottom: 4,
		fontWeight: "bold",
	},
	projectTitle: {
		fontSize: 11,
		fontWeight: "bold",
		marginBottom: 6,
		color: "#333",
	},
	projectDetail: {
		fontSize: 11,
		lineHeight: 1.3,
		marginBottom: 3,
		color: "#444",
	},
	techSection: {
		marginTop: 8,
	},
	techTitle: {
		fontSize: 11,
		fontWeight: "bold",
		color: "#555",
		marginBottom: 3,
	},
	techList: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8,
	},
	techItem: {
		fontSize: 10,
		padding: "2 6 0",
		backgroundColor: "#e8f4f8",
		border: "1pt solid #b8dce8",
		borderRadius: 3,
		color: "#2c5282",
	},
	qualification: {
		fontSize: 11,
		marginBottom: 3,
		color: "#333",
	},
});

const skillSheetData = {
	basicInfo: {
		age: "満30歳",
		gender: "男性",
		nationality: "日本",
		education: "サイバー大学卒業",
		location: "フルリモート・福岡・広島・大阪・東京",
		weekendWork: "相談可",
		workingHours: "相談可",
		businessTrip: "相談可",
	},
	qualifications: [
		"普通自動車第1種運転免許　(2017年5月)",
		"TOEIC Listening & Reading Test 740点　(2018年12月)",
	],
	skillSummary: {
		specialties:
			"Next.js、TypeScript、WordPress、Stripe、Square（フルスタック開発）",
		business:
			"モダン技術によるWebアプリ開発、レガシー環境からのリプレイス、決済システムの構築、自社サービスの保守・運用、新規事業の立ち上げ",
		fields:
			"型安全なフルスタックサービス構築、CMSを用いたサイト制作、API連携・設計、UI/UX設計、技術選定",
	},
	selfPR: [
		"私は、2020年にWeb系開発会社へアルバイトとして入社し、翌2021年に正社員として登用されました。",
		"立ち上がりは、WordPress や Next.js を用いたWeb制作に従事し、その後は自社サービスの保守・運用、新規事業の立ち上げなど、開発業務全般を担当してまいりました。",
		"現場では、レガシーな環境を Next.js などのモダンなフレームワークへ移行し、型安全かつ拡張性の高いサービス構築に取り組んできました。",
		"さらに、Stripe や Square を用いたオンライン決済の実装も多数経験し、エンドユーザーにとって安心・便利な体験設計を心がけています。",
		"新しい技術への適応も得意としており、必要に応じて自走的にキャッチアップしながらプロジェクトを推進してきました。チームの一員として、時には技術的なリード役として、プロダクトの価値最大化を目指し行動してきた自負があります。",
		"今後も、成果に直結する技術と実装力を武器に、より高品質なサービス開発に貢献してまいります。",
	],
	projects: [
		{
			period: "2021.1 - 現在",
			title: "ToB向けのWebサービスの新規開発・保守",
			overview:
				"Webサイト運用に伴う保守・更新作業を、社内のエンジニアがワンストップで提供するサービスの開発・保守",
			business: [
				"システム全体のアーキテクチャ設計および技術選定",
				"新規・追加機能の企画、開発、運用保守",
				"フロントエンドおよびバックエンド機能の実装（納期設定、ファイルアップロード、 type-safe API構築など）",
				"管理画面の実装と、管理業務に関わるシステムの構築",
				"デプロイ環境の整備",
				"外部サービス連携によるリアルタイム通信（Ably）や決済機能（Stripe）の実装",
			],
			contributions: [
				"レポート機能による工数削減と自動配信を実現。",
				"従来はスプレッドシートで手動管理・提出していた作業時間を、システム化された作業時間トラッキングとレポート機能で自動化。",
				"各担当者の作業内容と時間をPDF化し、毎月1日に自動メールで顧客に提出可能な仕組みを構築することで、報告作業の工数をほぼゼロに削減。",
			],
			technologies: [
				"TypeScript",
				"React.js",
				"tRPC",
				"lucia (認証)",
				"drizzle",
				"shadcn/ui",
				"tiptap",
				"Next.js",
				"Vercel",
				"Stripe",
				"Ably",
				"UrlBox",
				"Slack",
				"GitHub",
				"Asana",
				"Sentry",
			],
		},
		{
			period: "2021.9 - 現在",
			title: "ECサイト向けWeb注文システムの保守・追加機能開発",
			overview: "ECサイト向けのWeb注文システムの保守・追加機能開発",
			business: [
				"Square API・WordPress REST APIによる注文履歴・住所・決済情報のシステム実装、画面開発",
				"ポイントシステムの実装",
				"TCPDFを用いた帳票のPDF出力の実装",
				"Slack上での顧客折衝。特に追加機能要望やエラー報告に対して、工数見積もりや作業進捗の共有など。",
			],
			contributions: [
				"従来、会員登録不要で手軽だったが、リピーターは毎回クレジットカードやお届け先情報を入力する手間が発生していたため、毎回の入力の手間を削減するために、会員機能を導入。",
				"ユーザー登録フローの簡素化、ユーザー登録をシンプルにし、所要時間を約1分で実現。",
				"注文プロセスの効率化 注文完了までの平均時間を4分から2分に削減。",
				"帳票業務の自動化を行い、管理画面から領収書や請求書をPDFとしてダウンロード可能にし、帳票作成業務を完全に0へ。",
			],
			technologies: [
				"React.js",
				"PHP",
				"Vue.js",
				"TCPDF",
				"Square (決済)",
				"WordPress",
				"Sentry",
				"Webpack",
				"Slack",
				"Notion",
				"GitHub",
			],
		},
		{
			period: "2021.4 - 2025.4",
			title: "自社ウェブサイトおよびLPのリプレイス・保守",
			overview: "自社ウェブサイトおよびLPのモダン化",
			business: [
				"従来システムからNext.js + ヘッドレスCMS構成への移行設計",
				"WordPressのGraphQL APIを活用したコンテンツ配信システム構築",
				"Next.jsによるSEO最適化とモダンUI実装",
				"見積もりシミュレーション機能の開発",
			],
			contributions: [
				"従来のFTPによる手動更新作業から脱却し、Git管理によるデプロイ自動化を導入。",
				"見積もりシミュレーション機能により、顧客が事前に概算価格を確認可能になったことで、具体的な予算感を持った質の高いリードが増加した。",
			],
			technologies: [
				"React.js",
				"GraphQL",
				"Next.js",
				"Vercel",
				"WordPress",
				"Slack",
				"GitHub",
			],
		},
	],
};

const SkillSheetPDF = () => {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.header}>
					<Text style={styles.title}>技術経歴書</Text>
				</View>

				{/* Basic Information */}
				<View style={styles.basicInfo}>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>年齢：</Text>
						<Text style={styles.infoValue}>{skillSheetData.basicInfo.age}</Text>
					</View>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>性別：</Text>
						<Text style={styles.infoValue}>
							{skillSheetData.basicInfo.gender}
						</Text>
					</View>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>国籍：</Text>
						<Text style={styles.infoValue}>
							{skillSheetData.basicInfo.nationality}
						</Text>
					</View>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>最終学歴：</Text>
						<Text style={styles.infoValue}>
							{skillSheetData.basicInfo.education}
						</Text>
					</View>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>希望地域：</Text>
						<Text style={styles.infoValue}>
							{skillSheetData.basicInfo.location}
						</Text>
					</View>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>休日作業：</Text>
						<Text style={styles.infoValue}>
							{skillSheetData.basicInfo.weekendWork}
						</Text>
					</View>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>稼働時間：</Text>
						<Text style={styles.infoValue}>
							{skillSheetData.basicInfo.workingHours}
						</Text>
					</View>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>出張可否：</Text>
						<Text style={styles.infoValue}>
							{skillSheetData.basicInfo.businessTrip}
						</Text>
					</View>
				</View>

				{/* Qualifications */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>資格</Text>
					{skillSheetData.qualifications.map((qual) => (
						<Text key={`qual-${randomUUID()}`} style={styles.qualification}>
							• {qual}
						</Text>
					))}
				</View>

				{/* Skill Summary */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>スキル要約</Text>
					<Text style={styles.text}>
						<Text style={{ fontWeight: "bold" }}>得意技術:</Text>
						<Text>{skillSheetData.skillSummary.specialties}</Text>
					</Text>
					<Text style={styles.text}>
						<Text style={{ fontWeight: "bold" }}>得意業務:</Text>
						<Text>{skillSheetData.skillSummary.business}</Text>
					</Text>
					<Text style={styles.text}>
						<Text style={{ fontWeight: "bold" }}>得意分野:</Text>
						<Text>{skillSheetData.skillSummary.fields}</Text>
					</Text>
				</View>

				{/* Self PR */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>自己PR</Text>
					{skillSheetData.selfPR.map((pr) => (
						<Text key={`pr-${randomUUID()}`} style={styles.text}>
							{pr}
						</Text>
					))}
				</View>
			</Page>

			{/* Projects Page */}
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>プロジェクト経験</Text>
					{skillSheetData.projects.map((project) => (
						<View
							key={`project-${randomUUID()}`}
							style={styles.projectContainer}
						>
							<Text style={styles.projectPeriod}>{project.period}</Text>
							<Text style={styles.projectTitle}>{project.title}</Text>

							{project.overview && (
								<View>
									<Text style={styles.projectDetail}>
										概要: {project.overview}
									</Text>
								</View>
							)}

							{project.business.length > 0 && (
								<View>
									<Text
										style={[
											styles.projectDetail,
											{ fontWeight: "bold", marginTop: 8 },
										]}
									>
										業務内容:
									</Text>
									{project.business.map((item) => (
										<Text
											key={`business-${randomUUID()}`}
											style={styles.projectDetail}
										>
											• {item}
										</Text>
									))}
								</View>
							)}

							{project.contributions.length > 0 && (
								<View>
									<Text
										style={[
											styles.projectDetail,
											{ fontWeight: "bold", marginTop: 8 },
										]}
									>
										貢献内容:
									</Text>
									{project.contributions.map((item) => (
										<Text
											key={`contrib-${randomUUID()}`}
											style={styles.projectDetail}
										>
											{item.startsWith("・") ? item : `• ${item}`}
										</Text>
									))}
								</View>
							)}

							{project.technologies.length > 0 && (
								<View style={styles.techSection}>
									<Text style={[styles.techTitle, { marginBottom: 8 }]}>
										使用技術:
									</Text>
									<View style={styles.techList}>
										{project.technologies.map((tech, techIndex) => (
											<Text
												key={`tech-${randomUUID()}`}
												style={styles.techItem}
											>
												{tech}
											</Text>
										))}
									</View>
								</View>
							)}
						</View>
					))}
				</View>
			</Page>
		</Document>
	);
};

export async function GET() {
	try {
		// Generate PDF
		const pdfBuffer = await pdf(<SkillSheetPDF />).toBuffer();

		if (!pdfBuffer) {
			return new Response("Failed to generate PDF", { status: 500 });
		}

		return new Response(pdfBuffer as unknown as BodyInit, {
			headers: {
				"Content-Type": "application/pdf",
				"Content-Disposition": "inline; filename=skillsheet.pdf",
			},
		});
	} catch (error) {
		console.error("Error generating PDF:", error);
		return new Response("Failed to generate PDF", { status: 500 });
	}
}

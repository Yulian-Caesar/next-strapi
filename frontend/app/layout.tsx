import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getGlobalPageData, getGlobalPageMetaData } from "@/data/loaders";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
	const metaData = await getGlobalPageMetaData();
	return {
		title: metaData?.title,
		description: metaData?.descrription
	}
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const globalData = await getGlobalPageData();
	console.log(globalData)
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header data={globalData.data.header} />
				<div>{children}</div>
				<Footer data={globalData.data.footer} />
			</body>
		</html>
	);
}

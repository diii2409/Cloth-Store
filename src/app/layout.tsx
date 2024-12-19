import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {ClerkProvider} from "@clerk/nextjs";
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const raleway_latin_normal = localFont({
	src: "./fonts/raleway_latin_normal.woff2",
	variable: "--font-raleway-latin-normal",
	weight: "100 900",
});

const raleway_vietnamese_normal = localFont({
	src: "./fonts/raleway_vietnamese.woff2",
	variable: "--font-raleway-vietnamese-normal",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Cloths Store",
		default: "Coth Store",
	},
	description: "Store for all your clothing needs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body className={`${raleway_latin_normal.variable} antialiased`}>
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	);
}

import {cn} from "@/lib/utils";
import {ClerkProvider} from "@clerk/nextjs";
import type {Metadata} from "next";
import {raleway_latin_normal} from "./fonts";
import "./globals.css";

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
		<html lang="en" suppressHydrationWarning>
			<ClerkProvider>
				<body className={cn("antialiased", raleway_latin_normal.className)}>{children}</body>
			</ClerkProvider>
		</html>
	);
}

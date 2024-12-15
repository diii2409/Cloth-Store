import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s | Coth Store",
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
			<body className={` antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

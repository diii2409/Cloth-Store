import {Metadata} from "next";

export const metadata: Metadata = {
	title: {
		template: "Cloths Store Backend",
		default: "Cloth Store",
	},
	description: "Store for all your clothing needs",
};

export default function StudioLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={` antialiased`}>{children}</body>
		</html>
	);
}

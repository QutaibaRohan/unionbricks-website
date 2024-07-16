import type { Metadata } from "next"
import "./globals.css"
import { ruda } from "@/config/fonts"

export const metadata: Metadata = {
	title: "Union Bricks Company",
	description: "A Portfolio of Union Bricks Company",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={ruda.className}>{children}</body>
		</html>
	)
}

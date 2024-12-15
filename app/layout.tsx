import "./globals.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import ThemeProviderWrapper from "@/components/shared/theme-provider"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={`${geistSans.variable} ${geistSans.className} ${geistMono.variable} antialiased`}
			>
				<ThemeProviderWrapper>
					<main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
				</ThemeProviderWrapper>
			</body>
		</html>
	)
}

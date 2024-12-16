import "./globals.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import ThemeProviderWrapper from "@/components/shared/theme-provider"
import Footer from "@/components/shared/footer"
import LenisWrapper from "@/components/shared/lenis-wrapper"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: {
		default: "Cedric Angulo",
		template: "Cedric Angulo | %s",
	},
	metadataBase: new URL("https://cedricangulo.vercel.app"),
	description:
		"Frontend Developer and a second year student at NEUST, based in Nueva Ecija, Philippines.",
	openGraph: {
		title: "Simplified Portfolio",
		description:
			"Frontend Developer and a second year student at NEUST, based in Nueva Ecija, Philippines.",
		images: [`https://cedricangulo.vercel.app/og-image.png`],
	},
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
				<LenisWrapper>
					<ThemeProviderWrapper>
						<main className="max-w-4xl mx-auto px-4 pt-8">
							{children}
							<Footer />
						</main>
					</ThemeProviderWrapper>
				</LenisWrapper>
			</body>
		</html>
	)
}

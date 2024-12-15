"use client"

import { ThemeProvider } from "next-themes"

export default function ThemeProviderWrapper({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
		>
			{children}
		</ThemeProvider>
	)
}

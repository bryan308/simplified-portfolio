"use client"

import { useEffect, useState } from "react"
import { LoaderIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
	const { setTheme, theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <LoaderIcon className="text-muted-foreground w-12 h-12 md:w-5 md:h-5 animate-spin" />
	}

	const isLight = theme === "light"

	return (
		<button
			className="w-12 h-12 md:w-5 md:h-5"
			onClick={() => setTheme(isLight ? "dark" : "light")}
		>
			{isLight ? (
				<SunIcon className="w-12 h-12 md:w-5 md:h-5 text-cyan-200 md:text-foreground rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
			) : (
				<MoonIcon className="w-12 h-12 md:w-5 md:h-5 text-cyan-200 md:text-foreground rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
			)}
			<span className="sr-only">Toggle theme</span>
		</button>
	)
}

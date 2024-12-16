"use client"

import React from "react"
import { motion } from "motion/react"
import Link from "next/link"

const Footer: React.FC = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, filter: "blur(4px)" }}
			animate={{ opacity: 1, filter: "blur(0)" }}
			exit={{ opacity: 1, y: "0", filter: "blur(0)" }}
			transition={{ delay: 2, duration: 0.75, ease: "easeInOut" }}
			className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto border-t mt-20 py-6 md:py-12"
			aria-label="Footer"
		>
			<p className="text-sm">© 2024 Cedric Angulo. All rights reserved.</p>
			<p className="text-sm">
				Inspired by the work of Sir{" "}
				<Link
					href="https://bryllim.com"
					target="_blank"
					aria-label="Bryl Lim's website"
					className="underline underline-offset-1 hover:underline-offset-2 transition-all"
				>
					Bryl Lim
				</Link>
			</p>
		</motion.footer>
	)
}

export default Footer

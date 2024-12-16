"use client"

import React from "react"
import { motion } from "motion/react"

const Footer: React.FC = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, filter: "blur(4px)" }}
			animate={{ opacity: 1, filter: "blur(0)" }}
			exit={{ opacity: 1, y: "0", filter: "blur(0)" }}
			transition={{ delay: 2, duration: 0.75, ease: "easeInOut" }}
			className="max-w-4xl mx-auto border-t mt-20 py-6 md:py-12"
		>
			<p className="text-sm">© 2024 Cedric Angulo. All rights reserved.</p>
		</motion.footer>
	)
}

export default Footer

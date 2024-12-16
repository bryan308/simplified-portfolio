"use client"

import { cn } from "@/lib/utils"
import React, { ReactNode, ReactElement } from "react"
import { motion } from "motion/react"

import Image from "next/image"
import { Square } from "lucide-react"

const BentoCard: React.FC<{
	children: ReactNode
	className?: string
	title: string
	icon?: ReactElement | ReactElement<typeof Image>
	colSpan?: string
	rowSpan?: string
	delay?: number
}> = ({ children, className, title, icon = <Square />, colSpan, rowSpan, delay = 0, ...props }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: "1rem", filter: "blur(4px)" }}
			animate={{ opacity: 1, y: "0", filter: "blur(0)" }}
			exit={{ opacity: 1, y: "0", filter: "blur(0)" }}
			transition={{
				delay: delay,
				duration: 0.75,
				ease: "easeInOut",
			}}
			className={cn(
				"border bg-card p-4 rounded-lg hover:shadow-md transition-shadow",
				colSpan,
				rowSpan,
				className
			)}
			{...props}
		>
			<div className="flex items-center mb-2">
				{icon && <span className="mr-2">{icon}</span>}
				<h4 className="text-lg">{title}</h4>
			</div>
			{children}
		</motion.div>
	)
}
BentoCard.displayName = "BentoCard"

export default BentoCard

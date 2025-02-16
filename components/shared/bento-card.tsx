"use client"

import { cn } from "@/lib/utils"
import React, { ReactNode, ReactElement } from "react"
import { motion } from "motion/react"

import Image from "next/image"
import { ChevronRight, Square } from "lucide-react"
import Link from "next/link"

interface IBentoCardProps {
	children: ReactNode
	className?: string
	title: string
	icon?: ReactElement | ReactElement<typeof Image>
	colSpan?: string
	rowSpan?: string
	delay?: number
	hasOwnPage?: boolean
	pathText?: string
	pagePath?: string
}

const BentoCard: React.FC<IBentoCardProps> = ({
	children,
	className,
	title,
	icon = <Square />,
	colSpan,
	rowSpan,
	delay = 0,
	hasOwnPage = false,
	pathText,
	pagePath,
	...props
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: "1rem", filter: "blur(4px)" }}
			animate={{ opacity: 1, y: "0", filter: "blur(0)" }}
			exit={{ opacity: 1, y: "0", filter: "blur(0)" }}
			transition={{
				delay: delay,
				duration: 0.3,
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
			<div className="flex justify-between items-center mb-2">
				<div className="flex items-center">
					{icon && <span className="mr-2">{icon}</span>}
					<h4 className="text-lg">{title}</h4>
				</div>
				{hasOwnPage && (
					<Link
						href={pagePath ? pagePath : ""}
						className="inline-flex items-center text-sm group"
					>
						<span className="translate-x-4 group-hover:translate-x-0 group-focus:translate-x-0 transition-all duration-300 ease-out">
							{pathText}{" "}
						</span>
						<ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-focus:translate-x-1 group-focus:opacity-100" />
					</Link>
				)}
			</div>
			{children}
		</motion.div>
	)
}
BentoCard.displayName = "BentoCard"

export default BentoCard

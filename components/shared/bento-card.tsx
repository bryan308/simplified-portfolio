import { cn } from "@/lib/utils"
import React, { ReactNode, ReactElement } from "react"
import Image from "next/image"
import { Square } from "lucide-react"

const BentoCard: React.FC<{
	children: ReactNode
	className?: string
	title: string
	icon?: ReactElement | ReactElement<typeof Image>
	colSpan?: string
	rowSpan?: string
}> = ({ children, className, title, icon = <Square />, colSpan, rowSpan, ...props }) => {
	return (
		<div
			className={cn("border bg-card p-4 rounded-lg", colSpan, rowSpan, className)}
			{...props}
		>
			<div className="flex items-center mb-2">
				{icon && <span className="mr-2">{icon}</span>}
				<h4 className="text-lg">{title}</h4>
			</div>
			{children}
		</div>
	)
}
BentoCard.displayName = "BentoCard"

export default BentoCard

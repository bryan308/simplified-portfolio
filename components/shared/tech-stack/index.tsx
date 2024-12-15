import React from "react"
import { Badge } from "@/components/ui/badge"

const techStacks = [
	"React",
	"Next.js",
	"Tailwind",
	"TypeScript",
	"JavaScript",
	"Node.js",
	"C++",
	"Java",
	"PHP",
	"MySQL",
	"Apache",
	"Git",
	"GitHub",
]

const TechStack: React.FC = () => {
	return (
		<div className="flex flex-wrap gap-2">
			{techStacks.map((tech, index) => (
				<Badge
					key={index}
					variant="outline"
					className="text-xs"
				>
					{tech}
				</Badge>
			))}
		</div>
	)
}

export default TechStack

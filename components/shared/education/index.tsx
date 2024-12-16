import React from "react"
import { Badge } from "@/components/ui/badge"

const educationData = [
	{
		title: "2nd Year BSIT",
		year: "2024 - 2025",
		institution: "Nueva Ecija University of Science and Technology",
	},
	{
		title: "1st Year BSIT",
		year: "2023 - 2024",
		institution: "Nueva Ecija University of Science and Technology",
	},
	{
		title: "Grade 12 TVL-ICT",
		year: "2022 - 2023",
		institution: "Santa Rosa National High School",
	},
	{
		title: "Grade 11 TVL-ICT",
		year: "2021 - 2022",
		institution: "Zambales National High School",
	},
	{
		title: "Grade 10 ICT",
		year: "2019 - 2020",
		institution: "Locloc National High School",
	},
]

const EducationTimeline: React.FC = () => {
	return (
		<div className="border-l border-border pl-4 ml-2">
			{educationData.map((item, index) => (
				<div
					className="relative mt-6 group"
					key={index}
				>
					<div
						className={`absolute size-3 ${
							index === 0
								? "bg-zinc-700 dark:bg-zinc-400 animate-pulse-border"
								: "bg-background border border-border"
						} rounded-full top-1 -left-[1.4rem] z-10`}
					/>
					<div className="flex justify-between items-center">
						<h4 className="text-base font-semibold">{item.title}</h4>
						<Badge variant="outline">{item.year}</Badge>
					</div>
					<p className="text-xs text-gray-400 group-hover:text-primary transition-all">
						{item.institution}
					</p>
				</div>
			))}
		</div>
	)
}
EducationTimeline.displayName = "EducationTimeline"

export default EducationTimeline

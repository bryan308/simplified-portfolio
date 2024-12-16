import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import React from "react"

const projects = [
	{
		title: "Personal Website",
		description: "Built with Next.js and Tailwind",
		url: "https://rnlsevilla.vercel.app",
	},
	{
		title: "CA Resources",
		description: "Valuable resources and guides",
		url: "https://ca-resources.vercel.app",
	},
	{
		title: "WebWise",
		description: "Learn web development",
		url: "https://webwisee.vercel.app",
	},
	{
		title: "Techno Odyssey",
		description: "CICT Technoday 2024 entry",
		url: "https://technodyssey.vercel.app",
	},
]

const RecentProjects: React.FC = () => {
	return (
		<div className="grid gap-2 grid-cols-1 md:grid-cols-2">
			{projects.map((project, index) => (
				<Link
					key={index}
					className="border p-2 rounded-lg hover:shadow-md transition-shadow"
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h4 className="text-base font-semibold">{project.title}</h4>
					<p className="text-sm">{project.description}</p>
					<Badge
						variant="secondary"
						className="font-normal"
					>
						{project.url}
					</Badge>
				</Link>
			))}
		</div>
	)
}
RecentProjects.displayName = "RecentProjects"

export default RecentProjects

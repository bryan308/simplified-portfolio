import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

const projects = [
	{
		title: "Personal Website",
		description: "Built with Next.js and Tailwind",
		url: "https://rnlsevilla.vercel.app",
		image: "/personal-website.png",
	},
	{
		title: "CA Resources",
		description: "Valuable resources and guides",
		url: "https://ca-resources.vercel.app",
		image: "/ca-resources.jpg",
	},
	{
		title: "WebWise",
		description: "Learn web development",
		url: "https://webwisee.vercel.app",
		image: "/webwise.jpeg",
	},
	{
		title: "Techno Odyssey",
		description: "CICT Technoday 2024 entry",
		url: "https://technodyssey.vercel.app",
		image: "/technodyssey-mobile.jpg",
	},
]

interface ProjectTooltipProps {
	image: string
	children: React.ReactNode
	description: string
}

const ProjectTooltip: React.FC<ProjectTooltipProps> = ({ children, image, description }) => {
	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className="py-2 bg-background border border-border">
					<div className="space-y-1">
						<Image
							className="w-full rounded"
							src={image}
							width={141}
							height={58}
							quality={100}
							alt="Content image"
						/>
						<div className="text-center">
							<p className="hidden md:block text-sm text-foreground max-w-xs">{description}</p>
						</div>
					</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
ProjectTooltip.displayName = "Project Tooltip"

const RecentProjects: React.FC = () => {
	return (
		<div className="grid gap-2 grid-cols-1 md:grid-cols-2">
			{projects.map((project, index) => (
				<ProjectTooltip
					key={index}
					image={project.image}
					description={project.description}
				>
					<Link
						className="border p-2 rounded-lg hover:-translate-y-px hover:border-primary/30 hover:shadow-md transition-all"
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h4 className="text-base font-semibold">{project.title}</h4>
						<p className="block md:hidden text-sm">{project.description}</p>
						<Badge
							variant="secondary"
							className="font-normal"
						>
							{project.url}
						</Badge>
					</Link>
				</ProjectTooltip>
			))}
		</div>
	)
}
RecentProjects.displayName = "RecentProjects"

export default RecentProjects

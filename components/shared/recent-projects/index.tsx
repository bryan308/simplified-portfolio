import neustPortal from "@/public/neust-portal.png"
import pokemon from "@/public/tcg-tool.png"
import personalWebsite from "@/public/personal-website.png"
import caResources from "@/public/ca-resources.jpg"
// import webwise from "@/public/webwise.jpeg"
// import technoOdyssey from "@/public/technodyssey-mobile.jpg"

import Link from "next/link"
// import Image, { StaticImageData } from "next/image"
import React from "react"

import { Badge } from "@/components/ui/badge"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const projects = [
	{
		title: "NEUST Portal",
		description:
			"Improved version of the official NEUST Portal, with a modern and responsive design.",
		url: "https://neust-portal.vercel.app/",
		image: neustPortal,
	},
	{
		title: "Pokemon Grading Tool",
		description:
			"A specialized tool for Pokemon card analysis with real-time market data integration and automated price comparison.",
		url: "https://pokemon-proxx.vercel.app",
		image: pokemon,
	},
	{
		title: "Personal Website",
		description: "Rainiel's personal website, that showcases his works and information of himself.",
		url: "https://rnlsevilla.vercel.app",
		image: personalWebsite,
	},
	{
		title: "CA Resources",
		description: "Website that provides valuable resources and guides to improve productivity.",
		url: "https://ca-resources.vercel.app",
		image: caResources,
	},
]

// interface ProjectTooltipProps {
// 	image: string | StaticImageData
// 	children: React.ReactNode
// 	description: string
// 	alt: string
// }

// const ProjectTooltip: FC<ProjectTooltipProps> = ({ children, image, description, alt }) => {
// 	return (
// 		<TooltipProvider delayDuration={0}>
// 			<Tooltip>
// 				<TooltipTrigger asChild>{children}</TooltipTrigger>
// 				<TooltipContent className="py-2 bg-background border border-border">
// 					<div className="space-y-1">
// 						<Image
// 							className="w-full rounded"
// 							src={image}
// 							width={141}
// 							height={58}
// 							quality={100}
// 							priority
// 							alt={alt}
// 						/>
// 						<p className="hidden md:block text-sm text-foreground max-w-xs">{description}</p>
// 					</div>
// 				</TooltipContent>
// 			</Tooltip>
// 		</TooltipProvider>
// 	)
// }
// ProjectTooltip.displayName = "Project Tooltip"

const RecentProjects: React.FC = () => {
	return (
		<div className="grid gap-2 grid-cols-1 md:grid-cols-2">
			{projects.map((project, index) => (
				<Link
					key={index}
					className="border p-2 rounded-lg hover:-translate-y-px focus:-translate-y-px hover:border-primary/30 focus:border-primary/30 hover:shadow-md focus:shadow-md transition-all"
					href={project.url || ""}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h4 className="text-base font-semibold">{project.title}</h4>
					<p className="block md:hidden text-sm">{project.description}</p>
					{project.url && (
						<Badge
							variant="secondary"
							className="font-normal"
						>
							{project.url}
						</Badge>
					)}
				</Link>
				// <ProjectTooltip
				// 	key={index}
				// 	image={project.image}
				// 	alt={project.title}
				// 	description={project.description}
				// >
				// 	<Link
				// 		className="border p-2 rounded-lg hover:-translate-y-px focus:-translate-y-px hover:border-primary/30 focus:border-primary/30 hover:shadow-md focus:shadow-md transition-all"
				// 		href={project.url || ""}
				// 		target="_blank"
				// 		rel="noopener noreferrer"
				// 	>
				// 		<h4 className="text-base font-semibold">{project.title}</h4>
				// 		<p className="block md:hidden text-sm">{project.description}</p>
				// 		{project.url && (
				// 			<Badge
				// 				variant="secondary"
				// 				className="font-normal"
				// 			>
				// 				{project.url}
				// 			</Badge>
				// 		)}
				// 	</Link>
				// </ProjectTooltip>
			))}
		</div>
	)
}
RecentProjects.displayName = "RecentProjects"

export default RecentProjects

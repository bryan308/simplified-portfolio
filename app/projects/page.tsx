"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

import { motion } from "motion/react"
import React from "react"

const projects = [
	{
		title: "NEUST Portal",
		description:
			"Improved version of the official NEUST Portal, with a modern and responsive design",
		url: "https://neust-portal.vercel.app/",
	},
	{
		title: "WebWise",
		description: "A website where you can start learning web development.",
		url: "https://webwisee.vercel.app",
	},
	{
		title: "Class Directory",
		description: "Simple website for Class Information",
		url: "https://sumacabbsit1a.vercel.app/",
	},
	{
		title: "Age Counter",
		description: "A simple age counter that shows your age in real time",
		url: "https://realtime-age-counter.vercel.app",
	},
	{
		title: "Major Subject Outputs",
		description: "This is where I store my outputs from my major subjects",
		url: "https://cedricc.vercel.app",
	},
]

const Projects = () => {
	return (
		<>
			<motion.div {...AnimatefadeIn(0)}>
				<Link
					href="/"
					className="flex items-center gap-2 w-fit group"
				>
					<ChevronLeft className="h-4 w-4 translate-x-0 transform opacity-100 md:opacity-0 md:transition-all md:duration-300 md:ease-out md:group-hover:translate-x-1 md:group-focus:translate-x-1 md:group-hover:opacity-100 md:group-focus:opacity-100" />{" "}
					<span className="translate-x-0 md:-translate-x-6 md:group-hover:translate-x-0 md:group-focus:translate-x-0 md:transition-all md:duration-300 md:ease-out">
						Back to home
					</span>
				</Link>
			</motion.div>
			<Separator className="my-4" />
			<motion.h3 {...AnimatefadeIn(0.25)}>All Projects</motion.h3>
			<motion.div
				{...AnimatefadeIn(0.5)}
				className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-[20%]"
			>
				{projects.map((project, index) => (
					<Link
						key={index}
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="border p-2 rounded-lg hover:-translate-y-px hover:border-primary/30 hover:shadow-md transition-all"
					>
						<h4 className="text-base font-semibold">{project.title}</h4>
						<p className="text-sm">{project.description}</p>
						{project.url && (
							<Badge
								variant="secondary"
								className="font-normal"
							>
								{project.url}
							</Badge>
						)}
					</Link>
				))}
			</motion.div>
		</>
	)
}

export default Projects

const AnimatefadeIn = (delay: number = 0) => ({
	initial: { opacity: 0, y: "1.5rem", filter: "blur(4px)" },
	animate: { opacity: 1, y: "0", filter: "blur(0)" },
	exit: { opacity: 1, y: "0", filter: "blur(0)" },
	transition: { delay, duration: 0.3, ease: "easeInOut" },
})

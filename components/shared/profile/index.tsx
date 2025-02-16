"use client"

import React from "react"
import { ThemeToggle } from "../theme-toggle"
import { motion } from "motion/react"

import { MailIcon, MapPin } from "lucide-react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const personalInfo = {
	profile: "/me.jpg",
	name: "Cedric Angulo",
	address: "Nueva Ecija, Philippines",
	profession: "BS Information Technology",
	email: "cdrcangulo@gmail.com",
}

const AnimatefadeIn = (delay: number = 0) => ({
	initial: { opacity: 0, y: "1.5rem", filter: "blur(4px)" },
	animate: { opacity: 1, y: "0", filter: "blur(0)" },
	exit: { opacity: 1, y: "0", filter: "blur(0)" },
	transition: { delay, duration: 0.3, ease: "easeInOut" },
})

const Profile: React.FC = () => {
	return (
		<div className="flex gap-6 items-center">
			<motion.div {...AnimatefadeIn()}>
				<Image
					src={personalInfo.profile}
					alt="Profile Picture"
					width={160}
					height={160}
					priority
					className="rounded-lg w-40"
				/>
			</motion.div>
			<div className="w-full">
				<div className="flex justify-between items-center">
					<motion.h3
						{...AnimatefadeIn(0.1)}
						className="font-bold"
					>
						{personalInfo.name}
					</motion.h3>
					<motion.div {...AnimatefadeIn(0.1)}>
						<ThemeToggle />
					</motion.div>
				</div>
				<motion.p
					{...AnimatefadeIn(0.2)}
					className="flex items-center gap-1 text-sm"
				>
					<MapPin className="size-3" />
					{personalInfo.address}
				</motion.p>
				<motion.h4
					{...AnimatefadeIn(0.3)}
					className="mt-2"
				>
					{personalInfo.profession}
				</motion.h4>
				<motion.div
					{...AnimatefadeIn(0.4)}
					className="mt-4"
				>
					<Button
						variant="outline"
						className="text-xs rounded-lg"
						asChild
					>
						<Link
							href={`mailto:${personalInfo.email}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<MailIcon className="size-2" /> Send Email
						</Link>
					</Button>
				</motion.div>
			</div>
		</div>
	)
}
Profile.displayName = "Profile"

export default Profile

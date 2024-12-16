import React from "react"
import { ThemeToggle } from "../theme-toggle"

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

const Profile: React.FC = () => {
	return (
		<div className="flex gap-6 items-center">
			<div>
				<Image
					src={personalInfo.profile}
					alt="Profile Picture"
					width={160}
					height={160}
					priority
					className="rounded-lg w-40"
				/>
			</div>
			<div className="w-full">
				<div className="flex justify-between items-center">
					<h3 className="font-bold">{personalInfo.name}</h3>
					<ThemeToggle />
				</div>
				<p className="flex items-center gap-1 text-sm">
					<MapPin className="size-3" />
					{personalInfo.address}
				</p>
				<h4 className="mt-2">{personalInfo.profession}</h4>
				<div className="mt-4">
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
				</div>
			</div>
		</div>
	)
}
Profile.displayName = "Profile"

export default Profile

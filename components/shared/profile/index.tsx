import React from "react"
import { ThemeToggle } from "../theme-toggle"

import { MailIcon, MapPin } from "lucide-react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const personalInfo = {
	name: "Cedric Angulo",
	address: "Nueva Ecija, Philippines",
	profession: "BSIT Student",
	email: "cdrcangulo@gmail.com",
}

const Profile: React.FC = () => {
	return (
		<div className="flex gap-6 items-center">
			<div>
				<Image
					src="/shadcn.jpg"
					alt="Profile Picture"
					width={160}
					height={160}
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
						variant="secondary"
						className="text-sm rounded-lg"
						asChild
					>
						<Link href={`mailto:${personalInfo.email}`}>
							<MailIcon /> Send Email
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
Profile.displayName = "Profile"

export default Profile

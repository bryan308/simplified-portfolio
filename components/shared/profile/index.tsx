import React from "react"
import Image from "next/image"
import { MailOpen, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const personalInfo = {
	name: "Cedric Angulo",
	address: "Nueva Ecija, Philippines",
	profession: "BSIT Student",
	email: "cdrcangulo@gmail.com",
}

const Profile = () => {
	return (
		<div className="flex gap-6 items-center">
			<Image
				src="/shadcn.jpg"
				alt="Profile Picture"
				width={170}
				height={170}
				className="rounded-lg"
			/>
			<div className="w-full">
				<div>
					<h3 className="font-bold">{personalInfo.name}</h3>
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
							<MailOpen /> Send an Email
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Profile

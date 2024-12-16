import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import React from "react"
import SocialLinks from "./social-links"

const Connect = () => {
	return (
		<>
			<Link
				href="mailto:cdrcangulo@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block w-full"
			>
				<Badge
					variant="secondary"
					className="flex flex-col items-start p-2"
				>
					<p className="text-xs text-muted-foreground">Email</p>
					<p className="text-sm">cdrcangulo@gmail.com</p>
				</Badge>
			</Link>
			<Link
				href="https://cdrcangulo.vercel.app"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block w-full mt-2"
			>
				<Badge
					variant="secondary"
					className="flex flex-col items-start p-2"
				>
					<p className="text-xs text-muted-foreground">Modern Portfolio</p>
					<p className="text-sm">https://cdrcangulo.vercel.app</p>
				</Badge>
			</Link>
			<SocialLinks />
		</>
	)
}

export default Connect

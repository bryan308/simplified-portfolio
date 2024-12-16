import BentoCard from "@/components/shared/bento-card"
import Connect from "@/components/shared/connect"
import EducationTimeline from "@/components/shared/education"
import Profile from "@/components/shared/profile"
import RecentProjects from "@/components/shared/recent-projects"
import TechStack from "@/components/shared/tech-stack"
import { AppWindow, Briefcase, Cpu, GraduationCap, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
	return (
		<>
			<Profile />
			<div className="grid gap-2 grid-cols-1 lg:grid-cols-6 w-full mt-8">
				<BentoCard
					colSpan="col-span-6 md:col-span-4"
					rowSpan="row-span-1 md:row-span-2"
					title="About"
					icon={<Briefcase className="size-5" />}
				>
					<p>
						I‘m Cedric Angulo, a second year student at{" "}
						<Link
							href="https://neust.edu.ph/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-0 hover:underline-offset-2 transition-all"
						>
							NEUST
						</Link>
						, passionate about web development. I‘m particularly interested in frontend development,
						but I‘m also eager to expand my skills to include backend development, aiming to become
						a versatile and collaborative team player.
					</p>
					<p className="mt-6">
						I‘m currently exploring various tools and technologies, including Next.js App Router and
						Tailwind CSS, which I find super productive. To expand my skills, I plan to learn
						Laravel to build full-stack applications and stay adaptable in my career.
					</p>
				</BentoCard>
				<BentoCard
					colSpan="col-span-6 md:col-span-2"
					rowSpan="row-span-1 md:row-span-3"
					title="Education"
					icon={<GraduationCap className="size-5" />}
				>
					<EducationTimeline />
				</BentoCard>
				<BentoCard
					colSpan="col-span-6 md:col-span-4"
					rowSpan="row-span-1 md:row-span-2"
					title="Recent Projects"
					icon={<AppWindow className="size-5" />}
				>
					<RecentProjects />
				</BentoCard>
				<BentoCard
					colSpan="col-span-6 md:col-span-2"
					rowSpan="row-span-2"
					title="Connect"
					icon={<Mail className="size-5" />}
				>
					<Connect />
				</BentoCard>
				<BentoCard
					colSpan="col-span-6 md:col-span-4"
					rowSpan="row-span-1"
					title="Tech Stack"
					icon={<Cpu className="size-5" />}
				>
					<TechStack />
				</BentoCard>
			</div>
		</>
	)
}

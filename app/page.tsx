import BentoCard from "@/components/shared/bento-card"
import Profile from "@/components/shared/profile"
import TechStack from "@/components/shared/tech-stack"
import { Briefcase, Cpu, GraduationCap } from "lucide-react"

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
						As a second-year BSIT student at NEUST in the Philippines, I‘m passionate about web
						development. I‘m particularly interested in frontend development, but I also want to be
						versatile and work well in a team.
					</p>
					<p className="mt-6">
						I‘m currently exploring various tools and technologies, including Next.js App Router and
						Tailwind CSS, which I find super productive. To expand my skills, I plan to learn
						Laravel and PHP to build full-stack applications and stay adaptable in my career.
					</p>
				</BentoCard>
				<BentoCard
					colSpan="col-span-6 md:col-span-2"
					rowSpan="row-span-1 md:row-span-4"
					title="Education"
					icon={<GraduationCap className="size-5" />}
				>
					.
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

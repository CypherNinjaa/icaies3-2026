import Image from "next/image";
import { homeContent } from "@/content/home";
import { CheckCircle } from "lucide-react";

export function AboutInstitution() {
	const { aboutInstitution } = homeContent;

	return (
		<section id="about-institution" className="mt-10">
			<h2 className="text-2xl lg:text-3xl mb-6">
				<span className="page-title-light">About </span>
				<span className="page-title-accent">Amity University Patna</span>
			</h2>

			{/* Photo Grid */}
			<div className="grid grid-cols-2 gap-3 mb-6 rounded-xl overflow-hidden">
				{aboutInstitution.images.map((img, index) => (
					<div
						key={index}
						className="relative aspect-[4/3] overflow-hidden rounded-lg"
					>
						<Image
							src={img.src}
							alt={img.alt}
							fill
							className="object-cover hover:scale-105 transition-transform duration-500"
							sizes="(max-width: 768px) 45vw, 280px"
						/>
					</div>
				))}
			</div>

			{/* Description */}
			<p className="text-text-body leading-relaxed mb-4">
				{aboutInstitution.description}
			</p>
			<p className="text-text-body leading-relaxed mb-5 text-sm">
				{aboutInstitution.aboutAIIT}
			</p>

			{/* Bullet Points */}
			<ul className="space-y-2.5">
				{aboutInstitution.bulletPoints.map((point, index) => (
					<li key={index} className="flex items-start gap-2.5">
						<CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
						<span className="text-sm text-text-body">{point}</span>
					</li>
				))}
			</ul>
		</section>
	);
}

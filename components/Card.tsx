import Image, { StaticImageData } from "next/image"
import React from "react"

interface Props {
	title: string
	description: string
	buttonLabel: string
	buttonLink: string
	image: StaticImageData
	bordered?: boolean
	priceTag?: string
}

const Card = ({ title, description, buttonLabel, buttonLink, image, bordered, priceTag }: Props) => {
	return (
		<article
			className={`relative w-[calc(100%-1rem)] sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-2rem)] lg:w-[400px] max-w-[400px] h-[calc(100vh-2rem)] sm:h-[calc(50vh-1.5rem)] md:h-[calc(33.33vh-1rem)] lg:h-[500px] max-h-[500px] ${
				bordered && "border border-gray-200"
			} rounded-lg overflow-hidden`}
		>
			<Image src={image} alt={title} layout="fill" objectFit="cover" />

			<div className={`absolute bottom-0 left-0 right-0 p-4 ${!bordered && "bg-neutral-800/90"}`}>
				<h3 className={`text-lg font-bold ${bordered ? "text-black" : "text-white"} mb-2`}>{title}</h3>
				<p className={`text-sm ${bordered ? "text-gray-600" : "text-gray-200"} mb-4`}>{description}</p>
				<div className="flex items-center justify-between">
					{priceTag && <span className="text-base font-bold text-black">{priceTag}</span>}
					{buttonLabel && (
						<a
							href={buttonLink}
							target="_blank"
							rel="noopener noreferrer"
							className="px-3 py-1 mb-2 mt-4 text-sm rounded-xl bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
						>
							{buttonLabel}
						</a>
					)}
				</div>
			</div>
		</article>
	)
}

export default Card

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
		<article className={`relative rounded-lg w-[400px] h-[550px]  ${bordered && "border border-gray-200"}`}>
			<Image src={image} alt={title} layout="responsive" objectFit="cover" className="w-full h-full" />

			<div className={`absolute bottom-4 left-0 right-0 p-4 rounded-2xl ${!bordered && "bg-neutral-800/90"}`}>
				<h3 className={`text-lg md:text-xl font-black ${bordered ? "text-black" : "text-white"} mb-2`}>
					{title}
				</h3>
				<p className={`text-xs md:text-sm ${bordered ? "text-gray-600" : "text-gray-200"} mb-4`}>
					{description}
				</p>
				<div className="flex items-end justify-between">
					{priceTag && <span className="text-base md:text-lg font-bold text-black my-2">{priceTag}</span>}
					{buttonLabel && (
						<a
							href={buttonLink}
							className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-xl
								bg-black text-white hover:bg-white hover:text-black 
								transition-colors duration-300 ml-auto my-2"
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

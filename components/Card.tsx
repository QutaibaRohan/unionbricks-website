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
		<article className={bordered ? `border rounded block` : "rounded-md block"}>
			<Image src={image} alt="Hero Image" className="h-64 w-full object-cover sm:h-80 lg:h-96 rounded-md" />

			<h3 className="mt-4 text-lg font-black text-white sm:text-xl">{title}</h3>
			<p className="mt-2 max-w-sm text-white font-normal">{description}</p>
			<div className="flex bg-transparent">
				{priceTag && <span className="mt-2 text-white font-bold">{priceTag}</span>}
				{buttonLabel && (
					<a href={buttonLink} className="mt-2 ml-auto text-white font-bold">
						{buttonLabel}
					</a>
				)}
			</div>
		</article>
	)
}

export default Card

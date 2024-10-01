import Image from "next/image"
import React from "react"
import { descriptions, titles } from "@/constants"
import { hero } from "@/assets"

const Hero = () => {
	return (
		<div className="relative h-screen">
			<Image src={hero} alt="Hero Image" layout="fill" objectFit="cover" quality={100} />
			<article className="absolute top-1/4 sm:top-1/3 left-4 sm:left-16 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 p-4 sm:p-0">
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white">{titles.HERO}</h1>
				<p className="text-lg sm:text-xl font-normal text-white pt-4 pr-4 sm:pr-8 md:pr-16 lg:pr-40 text-wrap">
					{descriptions.HERO}
				</p>
			</article>
			<div className="absolute bottom-8 sm:bottom-16 right-4 sm:right-8 text-white text-right">
				<span className="block text-xl sm:text-2xl tracking-widest">SINCE</span>
				<span className="block text-xl sm:text-2xl tracking-widest">1976</span>
				<span className="block text-lg sm:text-xl tracking-tight pt-2">MADE IN PAKISTAN</span>
			</div>
		</div>
	)
}

export default Hero

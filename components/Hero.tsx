import Image from "next/image"
import React from "react"
import { descriptions, titles } from "@/constants"
import { hero } from "@/assets"

const Hero = () => {
	return (
		<div className="relative h-screen">
			<Image src={hero} alt="Hero Image" layout="fill" objectFit="cover" quality={100} />
			<article className="absolute top-1/3 ml-16 w-1/2">
				<h1 className="text-7xl font-black text-white">{titles.HERO}</h1>
				<p className="text-xl font-normal text-white pt-4 pr-40 text-wrap">{descriptions.HERO}</p>
			</article>
			<span className="absolute bottom-32 right-8 pr-24 pb-2 text-2xl tracking-widest text-white">SINCE</span>
			<span className="absolute bottom-32 right-8 pr-4 pb-2 text-2xl tracking-widest text-white">1976</span>
			<span className="absolute bottom-24 right-8 p-4 text-xl tracking-tight text-white">MADE IN PAKISTAN</span>
		</div>
	)
}
export default Hero

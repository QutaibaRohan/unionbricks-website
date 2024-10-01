import React from "react"
import Scaffold from "./Scaffold"
import { descriptions, titles } from "@/constants"

const Recipe = () => {
	return (
		<Scaffold
			title={titles.RECIPE}
			description={descriptions.RECIPE}
			backgroundColor="bg-white"
			textColor="text-black"
		>
			<iframe
				className="w-full h-[600px] rounded-3xl"
				src="https://www.youtube.com/embed/8ji9F3oSn0s?si=T2E0Ho92B-M46ylH"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</Scaffold>
	)
}

export default Recipe

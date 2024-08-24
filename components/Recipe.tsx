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
				src="https://www.youtube.com/watch?v=8ji9F3oSn0s"
				title="Recipe Video"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				className="w-full h-96"
			></iframe>
		</Scaffold>
	)
}

export default Recipe

import React from "react"
import Scaffold from "./Scaffold"
import { descriptions, titles } from "@/constants"
import Image from "next/image"

const Recipe = () => {
	return (
		<Scaffold title={titles.RECIPE} description={descriptions.RECIPE}>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/watch?v=8ji9F3oSn0s"
				title="Recipe Video"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</Scaffold>
	)
}

export default Recipe

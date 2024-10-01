import React from "react"
import Scaffold from "./Scaffold"
import Card from "./Card"
import { descriptions, titles } from "@/constants"
import { greenKiln } from "@/assets"

const Articles = () => {
	return (
		<Scaffold
			title={titles.ARTICLES}
			description={descriptions.ARTICLES}
			backgroundColor="bg-black"
			textColor="text-white"
		>
			<Card
				title="Pakistan's First Green Brick Kiln"
				description="Union Bricks in Pakistan is proud to be the country's first green brick kiln, revolutionising the brick-making industry"
				buttonLabel="SEE MORE"
				buttonLink="/"
				image={greenKiln}
			/>
		</Scaffold>
	)
}

export default Articles

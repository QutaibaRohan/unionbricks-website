import React from "react"
import Scaffold from "./Scaffold"
import Card from "./Card"
import { descriptions, titles } from "@/constants"
import { greenKiln, iloApproved } from "@/assets"

const Articles = () => {
	return (
		<Scaffold
			title={titles.ARTICLES}
			description={descriptions.ARTICLES}
			backgroundColor="bg-black"
			textColor="text-white"
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
				<Card
					title="Pakistan's First Green Brick Kiln"
					description="Union Bricks in Pakistan is proud to be the country's first green brick kiln, revolutionising the brick-making industry"
					buttonLabel="SEE MORE"
					buttonLink="/"
					image={greenKiln}
					bordered={false}
				/>
				<Card
					title="Pakistan's First ILO Approved"
					description="Union Bricks in Pakistan is proud to be the country's first Internation Labor Organization approved bricks manufacturer"
					buttonLabel="SEE MORE"
					buttonLink="/"
					image={iloApproved}
					bordered={false}
				/>
				<Card
					title="Pakistan's First Green Brick Kiln"
					description="Union Bricks in Pakistan is proud to be the country's first green brick kiln, revolutionising the brick-making industry"
					buttonLabel="SEE MORE"
					buttonLink="/"
					image={greenKiln}
					bordered={false}
				/>
			</div>
		</Scaffold>
	)
}

export default Articles

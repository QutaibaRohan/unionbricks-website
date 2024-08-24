import React from "react"
import Scaffold from "./Scaffold"
import { descriptions, titles } from "@/constants"

const Articles = () => {
	return (
		<Scaffold
			title={titles.ARTICLES}
			description={descriptions.ARTICLES}
			backgroundColor="bg-black"
			textColor="text-white"
		>
			<p>Here comes articles</p>
		</Scaffold>
	)
}

export default Articles

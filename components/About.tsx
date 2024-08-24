import React from "react"
import Scaffold from "./Scaffold"
import { descriptions, titles } from "@/constants"

const About = () => {
	return (
		<Scaffold
			title={titles.ABOUT}
			description={descriptions.ABOUT}
			backgroundColor="bg-black"
			textColor="text-white"
		>
			<p>Here comes about us</p>
		</Scaffold>
	)
}

export default About

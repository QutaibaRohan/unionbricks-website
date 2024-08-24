import React from "react"
import Scaffold from "./Scaffold"
import { descriptions, titles } from "@/constants"

const Contact = () => {
	return (
		<Scaffold
			title={titles.CONTACT}
			description={descriptions.CONTACT}
			backgroundColor="bg-white"
			textColor="text-black"
		>
			<p>Here comes contact</p>
		</Scaffold>
	)
}

export default Contact

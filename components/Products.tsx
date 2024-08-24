import React from "react"
import Scaffold from "./Scaffold"
import { descriptions, titles } from "@/constants"

const Products = () => {
	return (
		<Scaffold
			title={titles.PRODUCTS}
			description={descriptions.PRODUCTS}
			backgroundColor="bg-white"
			textColor="text-black"
		>
			<p>Here comes products</p>
		</Scaffold>
	)
}

export default Products

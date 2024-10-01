import React from "react"
import Scaffold from "./Scaffold"
import { descriptions, titles } from "@/constants"
import Card from "./Card"
import { awal, laalAwal } from "@/assets"

const Products = () => {
	return (
		<Scaffold
			title={titles.PRODUCTS}
			description={descriptions.PRODUCTS}
			backgroundColor="bg-white"
			textColor="text-black"
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card
					title="Awal"
					description="Introducing Awal: a radiant fusion of tradition and innovation, this product ignites your senses with its rich blend of heritage-inspired design and cutting-edge technology. Crafted with meticulous attention to detail"
					buttonLabel="PURCHASE"
					priceTag="PKR 20,500/-"
					buttonLink="/"
					image={awal}
					bordered={true}
				/>
				<Card
					title="Laal Awal"
					description="Introducing Laal Awal: a radiant fusion of tradition and innovation, this product ignites your senses with its rich blend of heritage-inspired design and cutting-edge technology. Crafted with meticulous attention to detail"
					buttonLabel="PURCHASE"
					priceTag="PKR 18,500/-"
					buttonLink="/"
					image={laalAwal}
					bordered={true}
				/>
				<Card
					title="Doam"
					description="Introducing Doum: a radiant fusion of tradition and innovation, this product ignites your senses with its rich blend of heritage-inspired design and cutting-edge technology. Crafted with meticulous attention to detail"
					buttonLabel="PURCHASE"
					priceTag="PKR 16,500/-"
					buttonLink="/"
					image={awal}
					bordered={true}
				/>
				{/* Add more Card components here */}
			</div>
		</Scaffold>
	)
}

export default Products

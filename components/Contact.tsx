import React from "react"
import Image from "next/image"
import Scaffold from "./Scaffold"
import { descriptions, titles } from "@/constants"
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import MapComponent from "./MapComponent"
import { coloredLogo } from "@/assets"
const Contact = () => {
	return (
		<Scaffold
			title={titles.CONTACT}
			description={descriptions.CONTACT}
			backgroundColor="bg-white"
			textColor="text-black"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-gray-100 p-6 rounded-lg">
					<div className="mb-6">
						<Image src={coloredLogo} alt="Union Bricks Logo" width={200} height={100} />
					</div>
					<div className="space-y-4">
						<p className="flex items-center">
							<FaWhatsapp className="mr-2" /> (92) 300 0323230
						</p>
						<p className="flex items-center">
							<FaFacebookF className="mr-2" /> unionbricksco@gmail.com
						</p>
						<p className="flex items-center">
							<FaInstagram className="mr-2" /> 3 km Raiwind to Sue Asal, Lahore
						</p>
					</div>
				</div>
				<div className="h-[400px] bg-gray-300 rounded-lg">
					<MapComponent />
				</div>
			</div>
			<div className="mt-12 flex justify-center space-x-6">
				<FaWhatsapp className="text-2xl" />
				<FaFacebookF className="text-2xl" />
				<FaInstagram className="text-2xl" />
				<FaTwitter className="text-2xl" />
			</div>
			<p className="text-center mt-6 text-sm text-gray-600">
				Copyright © 2024 Union Bricks. All rights reserved. Web design by algosnest
			</p>
		</Scaffold>
	)
}

export default Contact

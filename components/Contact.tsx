import React from "react"
import Image from "next/image"
import Scaffold from "./Scaffold"
import { descriptions, titles } from "@/constants"
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
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
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
				<div className="bg-white p-6 rounded-lg border-gray-300 border-2">
					<div className="mb-6">
						<Image src={coloredLogo} alt="Union Bricks Logo" width={200} height={100} />
					</div>
					<div className="space-y-6">
						<p className="flex items-center text-lg">
							<FaPhone className="mr-4 text-2xl" /> <p className="text-gray-500">(92) 300 0323230</p>
						</p>
						<p className="flex items-center text-lg">
							<FaEnvelope className="mr-4 text-2xl" />{" "}
							<p className="text-gray-500">unionbricksco@gmail.com</p>
						</p>
						<p className="flex items-center text-lg">
							<FaMapMarkerAlt className="mr-4 text-2xl" />{" "}
							<p className="text-gray-500">3 km Raiwind to Sue Asal, Lahore</p>
						</p>
					</div>
				</div>
				<div className="h-[400px] rounded-lg overflow-hidden">
					<MapComponent />
				</div>
			</div>
			<div className="mt-32 flex justify-center space-x-4">
				<a href="https://wa.me/923000323230" target="_blank" rel="noopener noreferrer">
					<FaWhatsapp className="text-4xl text-black hover:text-gray-800 cursor-pointer" />
				</a>
				<a href="https://www.facebook.com/Unionbricksco" target="_blank" rel="noopener noreferrer">
					<FaFacebookF className="text-4xl text-black hover:text-gray-800 cursor-pointer" />
				</a>
				<a href="https://www.instagram.com/unionbrickscompany" target="_blank" rel="noopener noreferrer">
					<FaInstagram className="text-4xl text-black hover:text-gray-800 cursor-pointer" />
				</a>
				<a href="https://twitter.com/unionbrickscompany" target="_blank" rel="noopener noreferrer">
					<FaTwitter className="text-4xl text-black hover:text-gray-800 cursor-pointer" />
				</a>
			</div>
			<p className="text-center mt-8 text-xs text-black">
				Copyright © 2024 Union Bricks. All rights reserved. Web design by algosnest
			</p>
		</Scaffold>
	)
}

export default Contact

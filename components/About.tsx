import React from "react"
import Image from "next/image"
import Scaffold from "./Scaffold"
import StatBox from "./StatBox"
import { descriptions, titles } from "@/constants"
import { bahriaTown, bahriaGrandMosque, soeLums, lums, liberty, metro, placeholder } from "@/assets"

const About = () => {
	return (
		<Scaffold
			title={titles.ABOUT}
			description={descriptions.ABOUT}
			backgroundColor="bg-black"
			textColor="text-white"
		>
			<div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-8">
				<div className="lg:col-span-2 flex flex-col justify-between">
					<div className="grid grid-cols-2 gap-4 content-start">
						<StatBox number="50+" label="YEARS" />
						<StatBox number="800+" label="EMPLOYEES" />
						<StatBox number="9000+" label="CLIENTS" />
						<StatBox number="10+" label="PRODUCTS" />
					</div>
					<div className="flex justify-between items-center mt-8 lg:mt-0">
						{[lums, bahriaTown, metro, placeholder, placeholder].map((logo, index) => (
							<div key={index} className="relative w-16 h-8 lg:w-20 lg:h-10">
								<Image src={logo} alt="Partner logo" layout="fill" objectFit="contain" />
							</div>
						))}
					</div>
				</div>
				<div className="lg:col-span-3 flex flex-col gap-4">
					<div className="relative w-full h-[400px]">
						<Image
							src={bahriaGrandMosque}
							alt="Grand Mosque"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="relative w-full h-[180px]">
							<Image src={soeLums} alt="LUMS" layout="fill" objectFit="cover" className="rounded-lg" />
						</div>
						<div className="relative w-full h-[180px]">
							<Image src={liberty} alt="Liberty" layout="fill" objectFit="cover" className="rounded-lg" />
						</div>
					</div>
				</div>
			</div>
		</Scaffold>
	)
}

export default About

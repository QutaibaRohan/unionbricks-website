import Image from "next/image"
import React from "react"
import ubcLogo from "@/public/ubc-logo.png"

interface Props {
	menuItems: { id: string; link: string; label: string }[]
}

const NavigationMenu = ({ menuItems }: Props) => {
	return (
		<nav className="flex justify-between w-full">
			<Image src={ubcLogo} alt="UBC" width={200} height={200} className="py-4 ml-16" />
			<menu className="flex self-center h-1/2 gap-8 mr-16">
				{menuItems.map(item => (
					<li className="border-l-2 border-cyan-50 font-normal" key={item.id}>
						<a className="pl-2" href={item.link}>
							{item.label}
						</a>
					</li>
				))}
			</menu>
		</nav>
	)
}

export default NavigationMenu

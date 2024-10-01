"use client"

import Image from "next/image"
import React, { useState } from "react"
import { logo } from "@/assets"

interface Props {
	menuItems: { id: string; link: string; label: string }[]
}

const MobileNavigationMenu = ({ menuItems }: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="w-full p-4">
			<div className="flex justify-between items-center">
				<Image src={logo} alt="UBC" width={150} height={150} className="py-2" />
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex flex-col justify-center items-center gap-y-1"
				>
					<span
						className={`bg-white block transition-all duration-300 ease-out 
						h-0.5 w-8 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
					/>
					<span
						className={`bg-white block transition-all duration-300 ease-out 
						h-0.5 w-8 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
					/>
					<span
						className={`bg-white block transition-all duration-300 ease-out 
						h-0.5 w-8 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
					/>
				</button>
			</div>
			<menu
				className={`flex flex-col items-center gap-4 mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? "max-h-96" : "max-h-0"
				}`}
			>
				{menuItems.map(item => (
					<li className="font-normal" key={item.id}>
						<a className="text-sm" href={`#${item.link}`}>
							{item.label}
						</a>
					</li>
				))}
			</menu>
		</nav>
	)
}

export default MobileNavigationMenu

import dynamic from "next/dynamic"
import React from "react"

const MobileNavigationMenu = dynamic(() => import("./MobileNavigationMenu"), { ssr: false })
const DesktopNavigationMenu = dynamic(() => import("./DesktopNavigationMenu"))

interface Props {
	menuItems: { id: string; link: string; label: string }[]
}

const NavigationMenu = ({ menuItems }: Props) => {
	return (
		<>
			<div className="sm:hidden">
				<MobileNavigationMenu menuItems={menuItems} />
			</div>
			<div className="hidden sm:block">
				<DesktopNavigationMenu menuItems={menuItems} />
			</div>
		</>
	)
}

export default NavigationMenu

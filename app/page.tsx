import { Hero, NavigationMenu, Recipe, Scaffold } from "@/components"
import { menuItems } from "@/constants"

export default function Home() {
	return (
		<main>
			<NavigationMenu menuItems={menuItems} />
			<Hero />
			<Recipe />
		</main>
	)
}

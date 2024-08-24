import { About, Articles, Contact, Hero, NavigationMenu, Products, Recipe } from "@/components"
import { menuItems } from "@/constants"

export default function Home() {
	return (
		<main>
			<NavigationMenu menuItems={menuItems} />
			<Hero />
			<Recipe />
			<section id="projects-section">
				<Articles />
			</section>
			<section id="products-section">
				<Products />
			</section>
			<section id="about-section">
				<About />
			</section>
			<section id="contact-section">
				<Contact />
			</section>
		</main>
	)
}

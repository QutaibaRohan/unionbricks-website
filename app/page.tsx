import NavigationMenu from "@/components/NavigationMenu";
import Image from "next/image";

const menuItems = [
  { id: "products", link: "/products", label: "PRODUCTS" },
  { id: "projects", link: "/projects", label: "PROJECTS" },
  { id: "about", link: "/about", label: "ABOUT" },
  { id: "contact", link: "/contact", label: "CONTACT" },
];

export default function Home() {
  return (
    <div>
      <NavigationMenu menuItems={menuItems} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </div>
  );
}

import { NavigationMenu } from "@/components";
import { menuItems } from "@/constants";

export default function Home() {
  return (
    <main>
      <NavigationMenu menuItems={menuItems} />
    </main>
  );
}

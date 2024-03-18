import { getItems } from "@/lib/items";
import ItemsGrid from "./components/items-grid";

export default async function Home() {
  const { items = [] } = await getItems()
  return (
    <>
      <ItemsGrid items={items} />
    </>
  )
}

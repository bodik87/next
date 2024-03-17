import { getItems } from "@/lib/items";
import CreateButton from "./components/create-button";
import CardPreview from "./components/card-preview";

export default async function Home() {
  const { items = [] } = await getItems()
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map(item => (
          <CardPreview id={item.id} key={item.id} title={item.title} body={item.body} color={item.color} />
        ))}
        <CreateButton />
      </div>
    </section>
  )
}

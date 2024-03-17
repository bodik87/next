import Card from "./components/card";

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Card color="yellow" />
        <Card color="red" />
      </div>
    </section>
  )
}

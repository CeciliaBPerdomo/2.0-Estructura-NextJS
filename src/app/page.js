import Counter from "@/Components/ui/counter.jsx"
import Header from "@/Components/ui/header"
// import Boton from "@/Components/ui/boton"

export default function Home() {
  return (
    // m-auto: margen automatico
    // my-4: margen en el eje y de 4
    // mt-4: margen top de 4
    <>
    <Header />
    <main className="container m-auto">
      <h1 className="text-4xl text-blue-600 text-bold my-4">Next.js</h1>
      <hr />
      {/* styles.text --> css de main.module.css */}
      <p className="text-base mt-4">Bienvenidos a CoderHouse!</p>
      <Counter />
    </main>
    </>
  )
}
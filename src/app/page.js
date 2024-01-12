import Counter from "@/Components/ui/counter.jsx"
import Header from "@/Components/ui/header"
// import Boton from "@/Components/ui/boton"
import Image from "next/image" //para poder importar imagenes

// optimizacion seo --> estatico
export const metadata = { 
  title: "CoderHouse - app (CP)",
  description: "app de muestra en Next.js",
  keywords: ["CoderHouse", "NextJS", "Vercel", "SSR"],
  openGraph: {
    title: "Next.js", 
    description: "The React framework for the web",
    type: "article", 
    publishedTime: "2024-01-12",
    authors: ["Cecilia Perdomo"]
  }
}

// optimizacion seo --> dinamico
// export async function generateMetadata ({params, searchParams}, parent) {
//   const id = params.id
//   const product = await fetch(`https//.../${id}`)
//   .then(response => response.json())

//   return (
//     {
//       title: product.title, 
//       description: product.description
//     }
//   )
// }

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
      <Image 
        src={"/coder.png"}
        width={300}
        height={300}
      />

    {/* La configuracion para que funcione en: next.config.js */}
      <Image 
        src={"https://d2yoo3qu6vrk5d.cloudfront.net/images/20231002155435/pulzo-ia-2023-10-02t155233-451-1024x1024.jpg"}
        alt="CoderHouse"
        width={300}
        height={300}
        priority
      />
    </main>
    </>
  )
}
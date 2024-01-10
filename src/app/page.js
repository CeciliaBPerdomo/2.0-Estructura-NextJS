import styles from "./main.module.scss" // importacion del modulo css, el nombre styles puede ser cualquier nombre

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Next.js</h1>
      <hr />
      {/* styles.text --> css de main.module.css */}
      <b className={styles.text}>Bienvenidos a CoderHouse!</b>
    </main>
  )
}

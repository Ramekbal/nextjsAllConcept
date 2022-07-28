import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>This is first changes</h1>
     <Link href="/contact">
      <a>Go to cotact page</a>
     </Link>
     <br/>
     <Link href="/users">
      <a>Go to users page</a>
     </Link>
     <Link href="/post">
      <a>Go to Post page</a>
     </Link>
    </div>
  )
}

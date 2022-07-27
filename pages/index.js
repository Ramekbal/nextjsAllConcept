import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>This is first changes</h1>
     <Link href="/contact" replace>
      <a>Go to cotact page</a>
     </Link>
    </div>
  )
}

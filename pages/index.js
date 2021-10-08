import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cassiopeia | Flower Store</title>
        <meta 
          name="description" 
          content="The beautiful & fresh flower store" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

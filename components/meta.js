import Head from "next/head"

export default function Meta () {
  return (
    <Head>
      <title>Cassiopeia | Flower Store</title>
      <meta 
        name="description" 
        content="The beautiful & fresh flower store"
        key="description"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
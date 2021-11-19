import Head from "next/head"

export default function Meta () {
  return (
    <Head>
      <title>Cassiopeia | Flower Store</title>
      <meta 
        name="description" 
        content="The beautiful & fresh flower store"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Head>
  )
}
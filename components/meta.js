import Head from "next/head"

export default function Meta () {
  return (
    <Head>
      <title>Cassiopeia | Flower Store</title>
      <meta 
        name="description" 
        content="The beautiful & fresh flower store"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Head>
  )
}
import Head from "next/head"

export default function Description ({children}) {
  return (
    <Head>
      <meta name="description" content={children} />
    </Head>
  )
}
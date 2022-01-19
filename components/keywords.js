import Head from "next/head"

export default function Keywords ({children}) {
  return (
    <Head>
      <meta name="keywords" content={children} />
    </Head>
  )
}
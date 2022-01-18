import Head from "next/head"

export default function Keywords ({kws}) {
  return (
    <Head>
      <meta name="keywords" content={kws} />
    </Head>
  )
}
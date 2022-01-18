import Head from "next/head"

export default function OpenGraph ({name, desc, image}) {
  return (
    <Head>
      <meta property="og:title" content={name} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
    </Head>
  )
}
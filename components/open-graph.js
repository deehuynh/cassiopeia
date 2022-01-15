import Head from "next/head"

export default function OpenGraph ({name, type, url, image}) {
  return (
    <Head>
      <meta property="og:title" content={name} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </Head>
  )
}
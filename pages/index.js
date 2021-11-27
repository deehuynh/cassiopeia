import Title from "../components/title"
// import components
import BannerAds from "../components/contents/banner-ads"
import Headline from "../components/contents/title"
import Container from "../components/contents/slide-container"

export default function Home ({latestProducts, adsData}) {
  return (
    <>
      <Title>Cassiopeia | Flower Store</Title>

      <div className="home">
        <BannerAds adsAPI={adsData} />
        <Headline>New</Headline>
        <Container className="home__container" page="flowers" prAPI={latestProducts} />

        <Headline>Relevant</Headline>
        <Container className="home__container" page="flowers" prAPI={latestProducts} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/flowers.json')
  const allProductsData = await res.json()
  const latestProducts = allProductsData.reverse().slice(0,5)

  const adsData = [
    {
      type: 'primary', background: '/cass15_mrg4hb.jpg',
      title: '40% off',
      description: 'Best deals this week. Fresh flowers, plants and gifts',
      btnTitle: 'Shop now',
      url:'/flowers'
    }, {
      type: 'secondary', title: 'Nice little gifts',
      description: 'for loved ones',
      background: '/cass23_gfwimt.png', btnTitle: 'View now',
      url:'/gifts'
    }, {
      type: 'secondary', title: 'Plants',
      description: 'for home comfort',
      background: '/cass31_esdbjz.png', btnTitle: 'View now',
      url:'/plants'
    }
  ]

  return {
    props: {
      latestProducts,
      adsData
    }
  }
}

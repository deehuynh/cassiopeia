import Title from "../components/title"
// import components
import BannerAds from "../components/contents/banner-ads"
import Headline from "../components/contents/title"
import Container from "../components/contents/slide-container"

export default function Home ({allProductsData, adsData}) {
  return (
    <>
      <Title>Cassiopeia | Flower Store</Title>

      <div className="home">
        <BannerAds adsAPI={adsData} />
        <Headline>New</Headline>
        <Container className="home__container" prAPI={allProductsData} />

        <Headline>Relevant</Headline>
        <Container className="home__container" prAPI={allProductsData} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allProductsData = [
    {
      name: 'White Lilies and Gerberas', price: '54', oldPrice: '',
      thumbnail: '/5cdd463408a93217111334_xbpxkx.webp'
    },
    {
      name: 'Red Roses and White Lilies', price: '99', oldPrice: '',
      thumbnail: '/5d84dc1a631b2292689077_nihv8m.webp'
    },
    {
      name: 'Chrysanthemums and Roses', price: '44', oldPrice: '',
      thumbnail: '/5d19dc8cc0983744838000_xc256j.webp'
    },
    {name: 'Roses and Lilies', price: '69', oldPrice: '82', thumbnail: '/5d84d46e1fe63737087781_eztymk.webp'},
    {name: 'Lilies And Roses', price: '39', oldPrice: '50', thumbnail: '/5d84d53800517236157520_awcivk.webp'}
  ];

  const adsData = [
    {
      type: 'primary', background: '/cass15_mrg4hb.jpg',
      title: '40% off',
      description: 'Best deals this week. Fresh flowers, plants and gifts',
      btnTitle: 'Shop now',
      url:'/'
    }, {
      type: 'secondary', title: 'Nice little gifts',
      description: 'for loved ones',
      background: '/cass23_gfwimt.png', btnTitle: 'View now',
      url:'/'
    }, {
      type: 'secondary', title: 'Plants',
      description: 'for home comfort',
      background: '/cass31_esdbjz.png', btnTitle: 'View now',
      url:'/'
    }
  ];

  return {
    props: {
      allProductsData,
      adsData
    }
  }
}

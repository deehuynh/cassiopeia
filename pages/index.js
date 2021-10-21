import Title from "../components/title"
// import components
import BannerAds from "../components/contents/banner-ads"
import Headline from "../components/contents/title"
import Container from "../components/contents/container"

const productsAPI = [
  {name: '', price: '', oldPrice: '', thumbnail: ''},
];

export default function Home () {
  return (
    <>
      <Title>Cassiopeia | Flower Store</Title>

      <div className="home">
        <BannerAds />
        <Headline>New</Headline>
        <Container />
      </div>
    </>
  )
}

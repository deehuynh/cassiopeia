import Title from "../components/title"
// import components
import BannerAds from "../components/contents/banner-ads"
import Headline from "../components/contents/title"

export default function Home () {
  return (
    <>
      <Title>Cassiopeia | Flower Store</Title>

      <div className="home">
        <BannerAds />
        <Headline>New</Headline>
      </div>
    </>
  )
}

import Title from "../components/title"
// import components
import BannerAds from "../components/contents/banner-ads"

export default function Home () {
  return (
    <>
      <Title>Cassiopeia | Flower Store</Title>

      <div className="home">
        <BannerAds />
      </div>
    </>
  )
}

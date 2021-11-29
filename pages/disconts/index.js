// head tag's title
import Title from "../../components/title"
// component
import Breadcrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import Headline from "../../components/contents/title"
import Container from "../../components/contents/slide-container"

export default function Disconts ({offerPrs}) {
  return (
    <div className="disconts">
      <Title>Disconts | Cassiopeia | Flower store</Title>

      <Breadcrumb />
      <PageName>Disconts</PageName>

      <Headline>Special offers</Headline>
      <Container page="flowers" prAPI={offerPrs} unSeeMore />

      <Headline>Events</Headline>
    </div>
  )
}

export async function getStaticProps() {
  const resOfferPrs = await fetch('https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/flowers.json')
  const getAllOfferPrs = await resOfferPrs.json()
  const offerPrs = getAllOfferPrs.slice(0,5)

  return {
    props: {
      offerPrs
    }
  }
}
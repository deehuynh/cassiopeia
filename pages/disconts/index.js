// head tag's title
import Title from "../../components/title"
// next api
import Image from "next/image"
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
      <Events />
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

function Events () {
  return (
    <div className="disconts__events">
      <EventsImageGroup order='1'>
        <EventsImage />
        <EventsImage />
      </EventsImageGroup>
    </div>
  )
}

function EventsImageGroup ({children, order = ''}) {
  return (
    <div className={"disconts__events-image-group" + order}>
      {children}
    </div>
  )
}

function EventsImage () {
  return (
    <div className="disconts__events-image"></div>
  )
}
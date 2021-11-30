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
        <EventsImage
          src="/49153883_10156234250588277_759211318690447360_n.jpg_fsdolu.jpg"
          width={1700}
          height={1133}
        />
        <EventsCaption>
          Merry Christmas
        </EventsCaption>
        <EventsImageGroup order='1-1'>
          <EventsImage
            src="/81186265_10157037095808277_5708839241006448640_n.jpg_w2p957.jpg"
          />
          <EventsImage
            src="/48367677_10156211834773277_3135315457381236736_n.jpg_p22k4w.jpg"
          />
          <EventsImage
            src="/76730117_10156963515298277_4845485651266633728_n.png_wqtjya.png"
            objectFit="cover"
          />
        </EventsImageGroup>
      </EventsImageGroup>

      <EventsImageGroup order='2'>
        <EventsImage
          src="/245932573_10158593016973277_7071505578099386214_n.jpg_ziizxm.jpg"
          width={1080}
          height={1350}
        />
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

function EventsImage ({objectFit = 'fill',
  src = "/49153883_10156234250588277_759211318690447360_n.jpg_fsdolu.jpg", width = 1000, height = 1000}) {
  return (
    <div className="disconts__events-image">
      <Image 
        src={src}
        width={width}
        height={height}
        layout='responsive'
        objectFit={objectFit}
        alt='gallery'
      />
    </div>
  )
}

function EventsCaption ({children}) {
  return (
    <div className="disconts__events-caption">
      {children}
    </div>
  )
}
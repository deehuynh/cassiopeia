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
  // fetch all database
  const resAllData = await fetch('https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/.json')
  const getAllData = await resAllData.json()
  // pages
  const pages = ["flowers", "plants", "gifts"]
  // offer products
  const offerPrs = []
  // fetch offer products
  pages.forEach((page) => {
    getAllData[page].forEach((item) => {
      if (item.offer && item.offer !== "") {
        offerPrs.push(item)
      }
    })
  })

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
        <EventsImageGroup order='2-1'>
          <EventsImage
            src="/47687127_10156201330158277_7041504890727694336_n.jpg_nlhh6d.jpg"
            width={1133}
            height={1700}
          />
        </EventsImageGroup>

        <EventsCaption direction='vertical'>happy birthday</EventsCaption>

        <EventsImageGroup order='2-2'>
          <EventsImage 
            src="/31781897_10155755686363277_2831750321405952000_n.jpg_rzkgeb.jpg"
          />

          <EventsCaption>
            Happy Mother&#39;s Day
          </EventsCaption>

          <EventsImage 
            src="/31899025_10155755691763277_2010388124407955456_n.jpg_yeh6hh.jpg"
          />

          <EventsCaption>
            Have The Sweetest
          </EventsCaption>
        </EventsImageGroup>
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

function EventsCaption ({children, direction = ''}) {
  const addedClass = direction === 'vertical' ? " disconts__events-caption--vertical" : ''
  return (
    <div className={"disconts__events-caption" + addedClass}>
      {children}
    </div>
  )
}
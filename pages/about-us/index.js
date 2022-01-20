// the head tag's title
import Title from "../../components/title"
import Description from "../../components/description"
import OpenGraph from "../../components/open-graph"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import Gallery from "../../components/contents/gallery"

export default function AboutUs () {
  return (
    <div className="about-us">
      <Title>About us | Cassiopeia | Flower store</Title>
      <Description>
        Over the course of the last 15 years we have grown steadily
        thanks to the trust placed in us by our customers.
        Today, We are a leading company in the world for sending flowers.
        We are also able to speedily ship fresh flowers to more than 20
        countries around the world.
      </Description>
      <OpenGraph 
        name="About us | Cassiopeia"
        desc="Over the course of the last 15 years we have grown steadily
          thanks to the trust placed in us by our customers.
          Today, We are a leading company in the world for sending flowers.
          We are also able to speedily ship fresh flowers to more than 20
          countries around the world."
        image="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1080,q_auto/252351058_10158633590988277_7917329218506464257_n.jpg_scglja.jpg"
      />

      <BreadCrumb tabName={{url: '/about-us', name: 'About us'}} />
      <PageName>About us</PageName>

      <div className="about-us__container">
        <AboutUsContent />
        <Gallery addedClass='about-us__gallery' />
      </div>
    </div>
  )
}

// the children components of the about us component
function AboutUsContent () {
  return (
    <div className="about-us__content">
      <p>
        The best way to brighten the special day of a friend or loved
        one is with flowers. But what happens when that special someone
        is far away? With Cassiopeia it is possible to surprise someone
        with a lovely bouquet no matter where he or she is in the world.
      </p>

      <p>
        With over 15 years of experience, we have covered many
        requests and are always receptive to all of your ideas,
        greeted with enthusiasm and our can-do attitude - if
        we aim to achieve something then we will!
      </p>

      <p>
        Over the course of the last 15 years we have grown steadily
        thanks to the trust placed in us by our customers.
        Today, We are a leading company in the world for sending flowers.
        We are also able to speedily ship fresh flowers to more than 20
        countries around the world.
      </p>
    </div>
  )
}
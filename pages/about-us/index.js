// the head tag's title
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import FilterBar from "../../components/contents/filter-bar"
import Gallery from "../../components/contents/gallery"

export default function AboutUs () {
  return (
    <div className="about-us">
      <Title>About us | Cassiopeia | Flower store</Title>

      <BreadCrumb tabName={{url: '/about-us', name: 'About us'}} />
      <PageName>About us</PageName>

      <div className="about-us__container">
        <Gallery addedClass='about-us__gallery' />
      </div>
    </div>
  )
}
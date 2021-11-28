// head tag's title
import Title from "../../components/title"
// component
import Breadcrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import Headline from "../../components/contents/title"
import Container from "../../components/contents/slide-container"

export default function Disconts () {
  return (
    <div className="disconts">
      <Title>Disconts | Cassiopeia | Flower store</Title>

      <Breadcrumb />
      <PageName>Disconts</PageName>

      <Headline>Special offers</Headline>
    </div>
  )
}
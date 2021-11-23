// the head tag's title
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import FilterBar from "../../components/contents/filter-bar"

export default function Plants () {
  return (
    <div className="plants">
      <Title>Plants | Cassiopeia | Flower store</Title>

      <BreadCrumb tabName={{url: '/plants', name: 'Plants'}} />
    </div>
  )
}
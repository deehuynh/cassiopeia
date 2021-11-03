// components
import Title from "../../components/title"
import BreadCrumb from "../../components/contents/breadcrumb"

export default function Plants () {
  return (
    <div className="plants">
      <Title>Plants | Cassiopeia | Flower store</Title>

      <BreadCrumb tabName={{url: '/plants', name: 'Plants'}} />
    </div>
  )
}
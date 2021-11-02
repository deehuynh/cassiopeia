// components
import Title from "../../components/title"
import BreadCrumb from "../../components/contents/breadcrumb"

export default function Flowers () {
  return (
    <div className="flowers">
      <Title>Flowers | Cassiopeia | Flower store</Title>

      <div className="flowers">
        <BreadCrumb tabName={{url: '/flowers', name: 'Flowers'}} />
      </div>
    </div>
  )
}
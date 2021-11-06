// head tags
import Title from "../components/title"
// components
import BreadCrumb from "../components/contents/breadcrumb"
import PageName from "../components/contents/page-name"

export default function Checkout () {
  return (
    <div className="checkout">
      <Title>Checkout | Cassiopeia | Flower store</Title>

      <BreadCrumb />
      <PageName>Checkout</PageName>
    </div>
  )
}
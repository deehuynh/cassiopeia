// head tags
import Title from "../components/title"
// components
import BreadCrumb from "../components/contents/breadcrumb"
import PageName from "../components/contents/page-name"

export default function Checkout () {
  // component partials
  const OrderContainer = () => {
    return (
      <div className="checkout__order"></div>
    )
  }

  const CheckoutContent = () => {
    return (
      <div className="checkout__content"></div>
    )
  }

  return (
    <div className="checkout">
      <Title>Checkout | Cassiopeia | Flower store</Title>

      <BreadCrumb />
      <PageName>Checkout</PageName>
      <div className="checkout__container">
        <CheckoutContent>1</CheckoutContent>
        <OrderContainer />
      </div>
    </div>
  )
}
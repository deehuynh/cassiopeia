import Link from "next/link"

export default function Cart () {
  return (
    <div className="cart-modal">
      <h2>
        Your cart
        <img src="/svgs/close-btn.svg" alt="close btn" />
      </h2>
      <Item />
      <Item />
      <Promocode />
      <OrderTotal />
      <CheckoutButton />
    </div>
  )
}

function Item () {
  return (
    <div className="cart-modal__item">
      <div className="cart-modal__avatar"></div>
      <div className="cart-modal__infor">
        <div>
          <span>Name</span>
          <span>Price</span>
        </div>

        <div>
          <img src="/svgs/minus-btn.svg" alt="minus button" />
          <span>N</span>
          <img src="/svgs/plus-btn.svg" alt="plus button" />
        </div>
      </div>
    </div>
  )
}

function Promocode () {
  return (
    <div className="cart-modal__promocode">
      <input type="text" defaultValue='' placeholder='Add promocode' />
      <div className="cart-modal__promocode-btn">Apply</div>
    </div>
  )
}

function OrderTotal () {
  return (
    <div className="cart-modal__order-total">
      <div className="cart-modal__field">
        <span>Shipping</span>
        <span>FREE</span>
      </div>

      <div className="cart-modal__field">
        <span>Order total</span>
        <span>$00.00</span>
      </div>
    </div>
  )
}

function CheckoutButton () {
  return (
    <Link href="/">
      <a>
        <div className="cart-modal__checkout-btn">
          <span>Checkout</span>
          <img src="/svgs/line-right-arrow.svg" alt="right arrow" />
        </div>
      </a>
    </Link>
  )
}
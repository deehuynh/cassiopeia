

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
    </div>
  )
}

function Item () {
  return (
    <div className="cart-modal__item">
      <div className="cart-modal__avatar"></div>
      <div className="cart-modal__infor">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

function Promocode () {
  return (
    <div className="cart-modal__promocode"></div>
  )
}
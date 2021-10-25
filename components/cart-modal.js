

export default function Cart () {
  return (
    <div className="cart-modal">
      <h2>
        Your cart
        <img src="/svgs/close-btn.svg" alt="close btn" />
      </h2>

      <Item />
      <Item />
    </div>
  )
}

function Item () {
  return (
    <div className="cart-modal__item"></div>
  )
}
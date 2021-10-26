

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
    <div className="cart-modal__promocode"></div>
  )
}
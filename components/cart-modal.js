import Link from "next/link"
import Image from "next/image"

const productsAPI = [
  {
    name: 'White Lilies and Gerberas', price: '54', oldPrice: '',
    thumbnail: '/5cdd463408a93217111334_xbpxkx.webp'
  },
  {
    name: 'Red Roses and White Lilies', price: '99', oldPrice: '',
    thumbnail: '/5d84dc1a631b2292689077_nihv8m.webp'
  },
  {
    name: 'Chrysanthemums and Roses', price: '44', oldPrice: '',
    thumbnail: '/5d19dc8cc0983744838000_xc256j.webp'
  },
];

export default function Cart (props) {
  return (
    <div ref={props.cartRef} className="cart-modal cart-modal__hidden">
      <h2>
        Your cart
      </h2>
      <Item />
      <Promocode />
      <OrderTotal />
      <CheckoutButton />
    </div>
  )
}

function Item () {
  const listItem = [];
  productsAPI.forEach((item, index) => {
    listItem.push(
      <div key={index} className="cart-modal__item">
        <div className="cart-modal__avatar">
          <Image src={item.thumbnail} width={100} height={100} alt="thumbnail" />
        </div>
        <div className="cart-modal__infor">
          <div>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>

          <div>
            <img src="/svgs/minus-btn.svg" alt="minus button" />
            <span>1</span>
            <img src="/svgs/plus-btn.svg" alt="plus button" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {listItem}
    </>
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
// next api
import Link from "next/link"
import Image from "next/image"
// functions
import preventBodyScroll from "../function/preventBodyScroll"
// use redux
import { useSelector } from "react-redux"

export default function Cart (props) {
  // get cart store
  const cartData = useSelector(state => state.cart)

  return (
    <div ref={props.cartRef} className="cart-modal cart-modal__hidden">
      <h2>
        Your cart
      </h2>

      {
        cartData.length === 0 ? 
          <div className="cart-modal__empty-cart">
            <h5>Your cart is empty</h5>
            <p>Next step: add a product to your cart</p>
          </div>
        : (
          <>
            <Item storagedItems={cartData} />
            <RemoveAll />
            <Promocode />
            <OrderTotal />
            <CheckoutButton
              cartRef={props.cartRef}
              openCartRef={props.openCartRef}
              closeCartRef={props.closeCartRef}
            />
          </>
        )
      }
    </div>
  )
}

function Item ({storagedItems}) {
  const listItem = [];
  storagedItems.forEach((item, index) => {
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
            <img
              src="/svgs/minus-btn.svg" alt="minus button" 
            />
            <span>{item.amount}</span>
            <img 
              src="/svgs/plus-btn.svg" alt="plus button" 
            />
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

function RemoveAll () {
  // remove all items in the cart
  const hanldeRemove = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart')
    }
  }

  return (
    <div className="cart-modal__remove-all">
      <span
        onClick={hanldeRemove}
      >
        Remove all
      </span>
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

function CheckoutButton ({cartRef, openCartRef, closeCartRef}) {
  return (
    <Link href="/checkout">
      <a>
        <div 
          onClick={()=>{
            cartRef.current.className = "cart-modal cart-modal__hidden";
            openCartRef.current.className = "show";
            closeCartRef.current.className = "hiden";
            preventBodyScroll(false);
          }}
          className="cart-modal__checkout-btn"
        >
          <span>Checkout</span>
          <img src="/svgs/line-right-arrow.svg" alt="right arrow" />
        </div>
      </a>
    </Link>
  )
}
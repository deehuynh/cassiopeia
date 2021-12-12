/* eslint-disable @next/next/no-img-element */
// react api
import { useState } from "react"
// next api
import Link from "next/link"
import Image from "next/image"
// functions
import preventBodyScroll from "../function/preventBodyScroll"
//handle data functions
import USDCurrency from "../handle_data_functions/usd-currency"
// use redux
import { useSelector, useDispatch } from "react-redux"
import { 
  removeAll, increasePrQuantity, decreasePrQuantity, removePr,
  addPromocode
} from "../redux/cartSlice"

export default function Cart (props) {
  // get cart store
  const cartData = useSelector(state => state.cart)
  // handle close cart function
  const closeCart = () => {
    props.cartRef.current.className = "cart-modal cart-modal__hidden";
    props.openCartRef.current.className = "show";
    props.closeCartRef.current.className = "hiden";
    props.orderCartRef.current.className = "show";
    preventBodyScroll(false);
  }

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
            <Item storagedItems={cartData} closeCart={closeCart} />
            <RemoveAll />
            <Promocode />
            <OrderTotal />
            <CheckoutButton
              closeCart={closeCart}
            />
          </>
        )
      }
    </div>
  )
}

function Item ({storagedItems, closeCart}) {
  const dispatch = useDispatch()

  const listItem = [];
  storagedItems.forEach((item, index) => {
    const itemQuantity = item.amount > 1 ? true : false
    // just show this element when item quantity more than 1
    const totalItemPrice = itemQuantity === true ? (
      <p>
        {(Number(item.price) * item.amount).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </p>
    ) : ''

    listItem.push(
      <div key={index} className="cart-modal__item">
        <div className="cart-modal__avatar">
          <Link href={`/${item.page}/${item.id}`}>
            <a className="cart-modal__avatar-overlay" onClick={closeCart}>
              <img src="/svgs/view-btn.svg" alt="view detail" />
            </a>
          </Link>
          <Image src={item.thumbnail} width={100} height={100} alt="thumbnail" />
        </div>
        <div className="cart-modal__infor">
          <div className="cart-modal__infor-block-1">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>

          <div className="cart-modal__infor-block-2">
            <div className="cart-modal__infor-counter">
              <img
                src="/svgs/minus-btn.svg" alt="minus button" 
                onClick={() => dispatch(
                  decreasePrQuantity({id: item.id})
                )}
              />
              <span>{item.amount}</span>
              <img 
                src="/svgs/plus-btn.svg" alt="plus button" 
                onClick={() => dispatch(
                  increasePrQuantity({id: item.id})
                )}
              />

              {totalItemPrice}
            </div>

            <div className="cart-modal__infor-delete-btn">
              <img 
                src="/svgs/delete-i.svg" alt="delete"
                onClick={() => dispatch(removePr({id: item.id}))}
              />
            </div>
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
  // redux dispatch
  const dispatch = useDispatch()
  // remove all items in the cart
  const handleRemoveAll = () => {
    dispatch(removeAll())
  }

  return (
    <div className="cart-modal__remove-all">
      <span
        onClick={handleRemoveAll}
      >
        Remove all
      </span>
    </div>
  )
}

function Promocode () {
  // promocode state
  const [promocode, setPromocode] = useState('')
  // check promocode
  const [isPromocode, setIsPromocode] = useState(null)
  // handle change
  const handleChangePromocode = (e) => {
    setPromocode(e.target.value)
  }
  // handle check promocode
  const handlePromocode = () => {
    if (promocode === '') {
      setIsPromocode('Please enter your promocode')
    }
  }

  return (
    <div className="cart-modal__promocode">
      <input
        type="text" value={promocode} placeholder='Add promocode'
        onChange={handleChangePromocode}
      />
      <div 
        className="cart-modal__promocode-btn"
        onClick={handlePromocode}
      >Apply</div>
    </div>
  )
}

function OrderTotal () {
  const orderTotal = useSelector(state => {
    let orderItemPrice = 0
    state.cart.forEach((item) => {
      orderItemPrice += Number(item.price) * item.amount
    })

    return USDCurrency(orderItemPrice)
  })

  return (
    <div className="cart-modal__order-total">
      <div className="cart-modal__field">
        <span>Shipping</span>
        <span>FREE</span>
      </div>

      <div className="cart-modal__field">
        <span>Order total</span>
        <span>{orderTotal}</span>
      </div>
    </div>
  )
}

function CheckoutButton ({closeCart}) {
  return (
    <Link href="/checkout">
      <a>
        <div 
          onClick={closeCart}
          className="cart-modal__checkout-btn"
        >
          <span>Checkout</span>
          <img src="/svgs/line-right-arrow.svg" alt="right arrow" />
        </div>
      </a>
    </Link>
  )
}
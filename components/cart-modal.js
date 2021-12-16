/* eslint-disable @next/next/no-img-element */
// react api
import { useState, useEffect } from "react"
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
  // get items in cart store
  const cartData = useSelector(state => state.cart ? state.cart["items"] : [])
  // error server and client is not match
  const [isClientSide, setIsClientSide] = useState(false)
  // two-pass rendering
  useEffect(() => {
    setIsClientSide(true)
  }, [])
  // handle close cart function
  const closeCart = () => {
    props.cartRef.current.className = "cart-modal cart-modal__hidden";
    props.openCartRef.current.className = "show";
    props.closeCartRef.current.className = "hiden";
    props.orderCartRef.current.className = "show";
    props.overlayModalRef.current.className = "modal-container__overlay modal-container__overlay--hidden";
    preventBodyScroll(false);
  }

  return (
    <div ref={props.cartRef} className="cart-modal cart-modal__hidden">
      <h2>
        Your cart
      </h2>

      {
        isClientSide === true && cartData.length === 0 ? 
          <div className="cart-modal__empty-cart">
            <h5>Your cart is empty</h5>
            <p>Next step: add a product to your cart</p>
          </div>
        : (
          <>
            <Item storagedItems={isClientSide === true ? cartData : []} closeCart={closeCart} />
            <RemoveAll />
            <Promocode />
            <OrderTotal isClientSide={isClientSide} />
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
                onClick={() => dispatch(removePr({id: item.id, page: item.page}))}
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
  // get cart promocode
  const cartPromocode = useSelector(state => state.cart ? state.cart["promocode"] : null)
  // declare dispatch
  const dispatch = useDispatch()
  // promocode list
  const promocodeData = [
    {name: '10DOLLARSOFF', number: 10},
    {name: '20DOLLARSOFF', number: 20}
  ]
  // promocode state
  const [promocode, setPromocode] = useState('')
  // check promocode
  const [isPromocode, setIsPromocode] = useState(null)
  // promocode status color
  const [statusPromocode, setStatusPromocode] = useState('error')
  // handle change
  const handleChangePromocode = (e) => {
    setPromocode(e.target.value)
  }
  // handle check promocode
  const handlePromocode = () => {
    if (promocode === '') {
      setStatusPromocode('error')
      setIsPromocode('Please enter your promocode! You can try [10DOLLARSOFF]')
    } else {
      for (let i = 0; i < promocodeData.length; i++) {
        if (promocode === promocodeData[i]["name"]) {
          // do not exist promocode
          if (!cartPromocode) {
            setStatusPromocode('applied')
            setIsPromocode('Applied')
            dispatch(addPromocode(promocodeData[i]))
            break
          } else {
            if (cartPromocode["name"] === promocode) {
              setStatusPromocode('applied')
              setIsPromocode('You have used this promocode' + ' [1/1]')
            } else {
              setStatusPromocode('applied')
              setIsPromocode('You have used promocode ' + cartPromocode["name"] + ' [1/1]')
            }
            break
          }
        } else {
          setStatusPromocode('error')
          setIsPromocode('Promocode is not available! You can try [20DOLLARSOFF]')
        }
      }
    }
  }
  // added class status color
  const addedClass = statusPromocode === 'applied' ?
    ' cart-modal__promocode-alert--applied' : ' cart-modal__promocode-alert--error'

  return (
    <>
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

      {isPromocode !== null ? (
        <div className={"cart-modal__promocode-alert" + addedClass}>
          {isPromocode}
        </div>
      ) : null}
    </>
  )
}

function OrderTotal ({isClientSide}) {
  // get cart promocode
  const promocode = useSelector(state => state.cart ? state.cart["promocode"] : null)
  // handle order total
  const orderTotal = useSelector(state => {
    // get cart items
    const items = state.cart ? state.cart["items"] : undefined
    // declare order item price
    let orderItemPrice = 0

    items && items.forEach((item) => {
      orderItemPrice += Number(item.price) * item.amount
    })

    return orderItemPrice
  })

  const promocodeNumber = promocode ? promocode["number"] : 0

  return (
    <div className="cart-modal__order-total">
      <div className="cart-modal__field">
        <span>Shipping</span>
        <span>FREE</span>
      </div>

      {
        isClientSide === true && promocode ? (
          <div className="cart-modal__field">
            <span>Promocode</span>
            <span>- {USDCurrency(promocodeNumber)}</span>
          </div>
        ) : ''
      }

      <div className="cart-modal__field">
        <span>Order total</span>
        <span>
          {
            isClientSide === true ? 
              USDCurrency(orderTotal - promocodeNumber) : ''
          }
        </span>
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
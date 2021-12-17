/* eslint-disable @next/next/no-img-element */
// react
import { useRef, useEffect } from "react"
// next
import Image from "next/image"
import Link from "next/link"
// redux
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../redux/cartSlice"

export default function Item (props) {
  // refs
  const cartButtonRef = useRef(null)
  // props
  const id = props.id;
  const thumbnail = props.thumbnail;
  const prName = props.name ? props.name : '';
  const prPrice = props.price ? '$ ' + props.price : '';
  const prOldPrice = props.oldPrice  ? '$' + props.oldPrice : '';
  const offer = props.offer ? props.offer : "";
  const imageType = props.imageType;
  const page = props.page;
  // added className
  const addedClass = props.className ? ' ' + props.className : '';
  const thumbnailAddedClass = imageType === "transparent" ? ' content__thumbnail--pd' : '';
  // redux
  const dispatch = useDispatch()
  // get localStorage items
  const cartItems = useSelector(state => state.cart ? state.cart["items"] : [])
  // add item to cart function
  const handleAddToCart = () => {
    dispatch(addToCart({
      ...props.item,
      page: page,
      amount: 1
    }))
  }

  // handled the effect of the added to cart items
  useEffect(() => {
    const itemExists = cartItems.find(item => (item.id === id) && (item.page === page))
    
    if (itemExists) {
      cartButtonRef.current.className = "content__thumbnail-cart-btn--show"
    } else {
      if (cartButtonRef.current) {
        cartButtonRef.current.className = "content__thumbnail-cart-btn--hidden"
      }
    }
  })

  if (props.seeMore) {
    return (
      <Link href={`/${page}`}>
        <a className="content__see-more-item">
          <h3>Catalog</h3>
          <p>
            <span>See more</span> 
            <img src="/svgs/line-right-arrow-black.svg" alt="right arrow" />
          </p>
        </a>
      </Link>
    )
  }

  return (
    <div className={`content__item` + addedClass}>
      <div className={"content__thumbnail" + thumbnailAddedClass}>
        {
          thumbnail && thumbnail !== '' ? (
            <Image
              src={thumbnail}
              width={480}
              height={480}
              layout="responsive"
              alt='flower thumbnail'
            />
          ) : ''
        }

        <div className="content__thumbnail-overlay">
          <div 
            className="content__thumbnail-cart-btn"
            onClick={handleAddToCart}
          >
            <img
              src="/svgs/cart-btn.svg" alt="cart btn" 
            />

            <span
              className="content__thumbnail-cart-btn--hidden"
              ref={cartButtonRef}
            >
              <img src="/svgs/check-solid.svg" alt="check icon" />
            </span>
          </div>

          <Link href={`/${page}/${id}`}>
            <a className="content__thumbnail-view-btn">
              <img src="/svgs/view-btn.svg" alt="view detail" />
            </a>
          </Link>
        </div>

        {
          offer !== "" ? (
            <OfferStock>
              {offer}
            </OfferStock>
          ) : ''
        }
      </div>

      <Link href={`/${page}/${id}`}>
        <a className="content__product-name">
          {prName}
        </a>
      </Link>

      <p className="content__product-price">
        <span>{prPrice}</span>
        <span>{prOldPrice}</span>
      </p>
    </div>
  )
}

function OfferStock ({children}) {
  return (
    <div className="content__item-offer-stock">
      <span></span>
      {children}
    </div>
  )
}
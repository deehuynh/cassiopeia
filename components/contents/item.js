import Image from "next/image"
import Link from "next/link"

export default function Item (props) {
  const id = props.id;
  const thumbnail = props.thumbnail;
  const prName = props.name ? props.name : '';
  const prPrice = props.price ? '$ ' + props.price : '';
  const prOldPrice = props.oldPrice  ? '$' + props.oldPrice : '';
  const offer = props.offer ? props.offer : ""
  const imageType = props.imageType;
  const page = props.page;
  // added className
  const addedClass = props.className ? ' ' + props.className : '';
  const thumbnailAddedClass = imageType === "transparent" ? ' content__thumbnail--pd' : '';

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
      {
        offer !== "" ? (
          <OfferStock>
            {offer}
          </OfferStock>
        ) : ''
      }

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
          <img src="/svgs/cart-btn.svg" alt="cart btn" />
          <Link href={`/${page}/${id}`}>
            <a><img src="/svgs/view-btn.svg" alt="view detail" /></a>
          </Link>
        </div>
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
      {children}
    </div>
  )
}
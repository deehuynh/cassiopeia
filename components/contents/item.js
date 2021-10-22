import Image from "next/image"
import Link from "next/link"

export default function Item (props) {
  const thumbnail = props.thumbnail;
  const prName = props.name ? props.name : '';
  const prPrice = props.price ? '$ ' + props.price : '';
  const prOldPrice = props.oldPrice  ? '$' + props.oldPrice : '';
  if (props.seeMore) {
    return (
      <div className="content__see-more-item">
        <h3>Catalog</h3>
        <p>
          <span>See more</span> 
          <img src="/svgs/line-right-arrow-black.svg" alt="right arrow" />
        </p>
      </div>
    )
  }

  return (
    <div className="content__item">
      <div className="content__thumbnail">
        {
          thumbnail && thumbnail !== '' ? (
            <Image
              src={thumbnail}
              width={260}
              height={260}
              alt='flower thumbnail'
            />
          ) : ''
        }

        <div className="content__thumbnail-overlay">
          <img src="/svgs/cart-btn.svg" alt="cart btn" />
          <Link href="/">
            <a><img src="/svgs/view-btn.svg" alt="view detail" /></a>
          </Link>
        </div>
      </div>

      <Link href="/">
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
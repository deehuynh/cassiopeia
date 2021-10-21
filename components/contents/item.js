import Image from "next/image"

export default function Item (props) {
  const thumbnail = props.thumbnail;
  const prName = props.name ? props.name : '';
  const prPrice = props.price ? props.price : '';
  const prOldPrice = props.oldPrice ? props.oldPrice : '';
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
      </div>

      <p className="content__product-name">
        {prName}
      </p>

      <p className="content__product-price">
        <span>{prPrice}</span>
        <span>{prOldPrice}</span>
      </p>
    </div>
  )
}
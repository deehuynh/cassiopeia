// next api
import Image from "next/image";
// components
import BreadCrumb from "../../components/contents/breadcrumb";

export default function DetailPage () {
  return (
    <div className="product-detail">
      <BreadCrumb />

      <div className="product-detail__container">
        <ImagesContainer />
        <InforContainer />
      </div>
    </div>
  )
}

function ImagesContainer () {
  return (
    <div className="product-detail__images">
      <div className="product-detail__images-container">
        <Image 
          src='5d19dc8cc0983744838000_xc256j.webp'
          width={568}
          height={568}
          alt='image'
        />
      </div>

      <div className="product-detail__label-bar">
        <div className="product-detail__label">
          <img src="/svgs/free-i.svg" alt="label" />
          <span>Benefits<br/> description</span>
        </div>

        <div className="product-detail__label">
          <img src="/svgs/star-i.svg" alt="label" />
          <span>Always fresh<br/> flowers</span>
        </div>

        <div className="product-detail__label">
          <img src="/svgs/camera-i.svg" alt="label" />
          <span>Take photo<br/> of bouquet</span>
        </div>
      </div>
    </div>
  )
}

function InforContainer () {
  return (
    <div className="product-detail__infor">
      <div className="product-detail__name">Name</div>
      <div className="product-detail__price">
        <span>price</span>
        <span>old price</span>
      </div>
      <div className="product-detail__count">
        <div className="product-detail__label">Count:</div>
        <div className="product-detail__count--counter">
          <img src="/svgs/plus-i.svg" alt="plus" />
          <span>N</span>
          <img src="/svgs/minus-i.svg" alt="minus" />
        </div>
      </div>
      <div className="product-detail__color">
        <div className="product-detail__label">Color:</div>
      </div>
      <div className="product-detail__button-group">
        <div className="product-detail__order-btn">Order now</div>
        <div className="product-detail__cart-btn">
          <img src="/svgs/cart-btn-square.svg" alt="add to cart" />
        </div>
      </div>
    </div>
  )
}
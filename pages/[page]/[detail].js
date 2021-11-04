// next api
import Image from "next/image"
// hooks
import { useRef } from "react"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import Container from "../../components/contents/slide-container"
import Headline from "../../components/contents/title"
// functions
import handleShowChildButton from "../../function/handleShowChildButton"

export default function DetailPage () {
  const recomandedPr = [
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
    {name: 'Roses and Lilies', price: '69', oldPrice: '82', thumbnail: '/5d84d46e1fe63737087781_eztymk.webp'},
    {name: 'Lilies And Roses', price: '39', oldPrice: '50', thumbnail: '/5d84d53800517236157520_awcivk.webp'}
  ];
  return (
    <div className="product-detail">
      <BreadCrumb />

      <div className="product-detail__container">
        <ImagesContainer />
        <InforContainer />
      </div>

      <Headline>You may like</Headline>
      <Container prAPI={recomandedPr} />
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
  const openDropdownRef = useRef(null);
  const closeDropdownRef = useRef(null);
  // component partials
  const PrName = ({children}) => <div className="product-detail__name">{children}</div>;
  const PrPrice = ({name,price, oldPrice}) => (
    <div className="product-detail__price">
      <div className="product-detail__m-name">
        {name}
      </div>

      <div>
        <span>${price}</span>
        <span>${oldPrice}</span>
      </div>
    </div>
  );
  const PrCounter = () => (
    <div className="product-detail__count">
      <div className="product-detail__label">Count:</div>
      <div className="product-detail__count--counter">
        <img src="/svgs/plus-i.svg" alt="plus" />
        <span>N</span>
        <img src="/svgs/minus-i.svg" alt="minus" />
      </div>
    </div>
  );
  const PrColorSelecter = () => (
    <div className="product-detail__color">
      <div className="product-detail__label">Color:</div>
      <div className="product-detail__color-select">
        <span></span>
        <span className="product-detail__color--selected"></span>
        <span></span>
      </div>
    </div>
  );
  const PrButtonGroup = () => (
    <div className="product-detail__button-group">
      <div className="product-detail__order-btn">Order now</div>
      <div className="product-detail__cart-btn">
        <img src="/svgs/cart-btn-square.svg" alt="add to cart" />
      </div>
    </div>
  );
  const PrListContent = ({title, content}) => (
    <div className="product-detail__list-content">
      <div 
        onClick={()=>{handleShowChildButton(openDropdownRef, closeDropdownRef)}}
        className="product-detail__list-button"
      >
        <span>{title}</span>
        <img ref={openDropdownRef} className="show" src="/svgs/plus-dropdown.svg" alt="plus" />
        <img ref={closeDropdownRef} className="hiden" src="/svgs/minus-dropdown.svg" alt="minus" />
      </div>

      <div 
        className="product-detail__list-children product-detail__list-children--hidden"
      >{content}</div>
    </div>
  );

  return (
    <div className="product-detail__infor">
      <PrName>Rose</PrName>
      <PrPrice name="Rose" price={38} oldPrice={30} />
      <PrCounter />
      <PrColorSelecter />
      <PrButtonGroup />
      <PrListContent
        title='Bouquet contents'
      />
      <PrListContent
        title='Details'
      />
      <PrListContent
        title='Delivery & Pay policy'
        content='Each bouquet is unique and is prepared 
        by an expert florist and our customer service team 
        is at your service to ensure the best experience possible.'
      />
    </div>
  )
}
import React from "react"
// next api
import Image from "next/image"
import Link from "next/link"
// hooks
import { useRef } from "react"
// head tags
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import Container from "../../components/contents/slide-container"
import Headline from "../../components/contents/title"
// functions
import handleShowChildButton from "../../function/handleShowChildButton"

export default function DetailPage ({prs}) {
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
      <Title>White Rose | Cassiopeia | Flower Store</Title>
      <BreadCrumb />

      <div className="product-detail__container">
        <ImagesContainer avatarImage={prs.thumbnail} />
        <InforContainer />
      </div>

      <Headline>You may like</Headline>
      <Container className="product-detail__recomanded" prAPI={recomandedPr} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/.json`)
  const allData = await res.json()

  // pre-render based on page
  const paths = []
  const pageNameArr = Object.keys(allData)
  pageNameArr.forEach((pageName)=>{
    if (pageName === "flowers") {
      allData[pageName].forEach((item)=>{
        paths.push({
          params: {
            page: pageName,
            detail: item.id,
          }
        })
      })
    }
  })

  return {paths, fallback: false}
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/${params.page}/${params.detail}.json`)
  const prs = await res.json()

  return {
    props: {
      prs
    }
  }
}

function ImagesContainer ({avatarImage}) {
  return (
    <div className="product-detail__images">
      <div className="product-detail__images-container">
        <Image 
          src={avatarImage}
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
  // multiple openDropdownRefs
  const openDropdownRef = useRef([]);
  openDropdownRef.current = [1,2,3].map(
    (index) => openDropdownRef.current[index] = React.createRef()
  );
  // multiple closeDropdownRefs
  const closeDropdownRef = useRef([]);
  closeDropdownRef.current = [1,2,3].map(
    (index) => closeDropdownRef.current[index] = React.createRef()
  );
  // multiple content button
  const contentRef = useRef([]);
  contentRef.current = [1,2,3].map(
    (index) => contentRef.current[index] = React.createRef()
  );
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
      <Link href='/checkout'>
        <a className="product-detail__order-btn">Order now</a>
      </Link>
      <div className="product-detail__cart-btn">
        <img src="/svgs/cart-btn-square.svg" alt="add to cart" />
      </div>
    </div>
  );
  const PrListContent = ({title, content, openDropdownRef, closeDropdownRef,contentRef}) => (
    <div className="product-detail__list-content">
      <div
        onClick={()=>{handleShowChildButton(openDropdownRef, closeDropdownRef, contentRef)}}
        className="product-detail__list-button"
      >
        <span>{title}</span>
        <img ref={openDropdownRef} className="show" src="/svgs/plus-dropdown.svg" alt="plus" />
        <img ref={closeDropdownRef} className="hiden" src="/svgs/minus-dropdown.svg" alt="minus" />
      </div>

      <div 
        ref={contentRef}
        className="product-detail__list-children product-detail__list-children--hidden"
      >{content}</div>
    </div>
  );

  // array contents of buttons
  const listContentButton = [
    {title: 'Bouquet contents', content: 'No content yet'},
    {title: 'Details', content: 'No content yet'},
    {
      title: 'Delivery & Pay policy',
      content: 'Each bouquet is unique and is prepared by an expert florist and our customer service team is at your service to ensure the best experience possible.'
    },
  ];

  return (
    <div className="product-detail__infor">
      <PrName>Rose</PrName>
      <PrPrice name="Rose" price={38} oldPrice={30} />
      <PrCounter />
      <PrColorSelecter />
      <PrButtonGroup />
      {
        listContentButton.map(
          (item, index) => (
            <PrListContent
              key={index}
              openDropdownRef={openDropdownRef.current[index]}
              closeDropdownRef={closeDropdownRef.current[index]}
              contentRef={contentRef.current[index]}
              title={item.title}
              content={item.content}
            />
          )
        )
      }
    </div>
  )
}
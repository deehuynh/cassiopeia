/* eslint-disable @next/next/no-img-element */
import React from "react"
// next api
import Image from "next/image"
import Link from "next/link"
// hooks
import { useRef, useReducer, useEffect } from "react"
// head tags
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import Container from "../../components/contents/slide-container"
import Headline from "../../components/contents/title"
import Description from "../../components/description"
import OpenGraph from "../../components/open-graph"
import Keywords from "../../components/keywords"
// functions
import handleShowChildButton from "../../function/handleShowChildButton"
// handle data functions
import handleDescriptionText from "../../handle_data_functions/handle-description"
// handle api function
import relevantPrApi from "../../api/relevantPrApi"
// reducers
import detailProductReducer from "../../reducers/detail-pr-reducer"
// redux
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../redux/cartSlice"

export default function DetailPage ({prs, relevantFlowers, page}) {
  const initState = {
    "amount": 1
  }
  const [prState, dispatch] = useReducer(detailProductReducer, initState)

  return (
    <div className="product-detail">
      <Title>{prs.name} | Cassiopeia</Title>
      <Description>
        {handleDescriptionText(prs)}
      </Description>
      <Keywords>
        {'Buy ' + prs.name}
      </Keywords>
      <OpenGraph 
        name={prs.name}
        desc={handleDescriptionText(prs)}
        image={'https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto' + prs.thumbnail}
      />

      <BreadCrumb detailTab={prs.name} />

      <div className="product-detail__container">
        <ImagesContainer nameImage={prs.name} avatarImage={prs.thumbnail} imageType={prs.imageType ? prs.imageType : ""} />
        <InforContainer prDetail={prs} page={page} prState={prState} dispatch={dispatch} />
      </div>

      <Headline>You may like</Headline>
      <Container className="product-detail__recomanded" page={page} prAPI={relevantFlowers} />
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
    // the json data have a lot of keys, they includes the pages.
    // So we have to check the product page which have detail product
    if ((pageName === "flowers") || (pageName === "plants") || (pageName ==="gifts")) {
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
  const pageName = params.page
  const res = await fetch(`https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/${pageName}/${params.detail}.json`)
  const prs = await res.json()

  // handle relevant product function
  const getFlowersData = await fetch(`https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/${pageName}.json`)
  const flowersData = await getFlowersData.json()
  // relevantPrApi() returns relevantFlowers data
  const relevantFlowers = relevantPrApi(flowersData, params.detail)

  return {
    props: {
      prs,
      relevantFlowers,
      page: pageName
    }
  }
}

function ImagesContainer ({avatarImage, imageType, nameImage}) {
  const addedClass = imageType === "transparent" ? " product-detail__images-container--pd" : ''

  return (
    <div className="product-detail__images">
      <div className={"product-detail__images-container" + addedClass}>
        <Image 
          src={avatarImage}
          width={568}
          height={568}
          layout="responsive"
          alt={nameImage}
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

function InforContainer ({prDetail, page, prState, dispatch}) {
  // use redux
  const reduxDispatch = useDispatch()
  // product state
  const prAmount = prState.amount

  // dispatch
  const increaseAmountPr = () => {
    dispatch({
      type: 'increase_amount_pr'
    })
  }

  const decreaseAmountPr = () => {
    dispatch({
      type: 'decrease_amount_pr'
    })
  }

  // get localStorage items
  const cartItems = useSelector(state => state.cart ? state.cart["items"] : [])

  // data varialble
  const prId = prDetail.id;
  const prName = prDetail.name;
  const prPrice = prDetail.price;
  const prOldPrice = prDetail.oldPrice;
  const prTypes = prDetail.type;
  const prOccasion = prDetail.occasion;
  const prIncludes = prDetail.includes && prDetail.includes !== "" ? prDetail.includes : "No content yet";

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
  // added item to cart ref
  const addedToCartRef = useRef(null);
  // auto update added to cart effect
  useEffect(() => {
    const itemExists = cartItems.find(item => (item.id === prId) && (item.page === page))

    if (itemExists) {
      addedToCartRef.current.className = "product-detail__cart-btn--show"
    } else {
      if (addedToCartRef.current) {
        addedToCartRef.current.className = "product-detail__cart-btn--hidden"
      }
    }
  }, [cartItems, page, prId])
  // component partials
  const PrName = ({children}) => <div className="product-detail__name">{children}</div>;
  const PrPrice = () => (
    <div className="product-detail__price">
      <div className="product-detail__m-name">
        {prName}
      </div>

      <div>
        <span>${prPrice}</span>
        <span>{prOldPrice ? `$` + prOldPrice : ''}</span>
      </div>
    </div>
  );
  const PrCounter = () => (
    <div className="product-detail__count">
      <div className="product-detail__label">Count:</div>
      <div className="product-detail__count--counter">
        <img 
          src="/svgs/minus-i.svg" alt="minus" 
          onClick={decreaseAmountPr}
        />
        <span>{prAmount}</span>
        <img 
          src="/svgs/plus-i.svg" alt="plus" 
          onClick={increaseAmountPr}
        />
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
  const PrTextGroup = ({children}) => (
    <div className="product-detail__text-group">
      {children}
    </div>
  )
  const PrTypes = () => {
    if (prTypes && prTypes !== '') {
      return (
        <div className="product-detail__text">
          <div className="product-detail__label">
            Type{
              Array.isArray(prTypes) === true && prTypes.length > 1 ? 's: ' : ': '
            }
    
            {
              Array.isArray(prTypes) === true ? prTypes.map((item, index) => {
                if (prTypes.length === index + 1) {
                  return item;
                }
    
                return item + ", "
              }) : prTypes
            }
          </div>
        </div>
      )
    } else {
      return null
    }
  }
  const PrOccasion = () => {
    if (prOccasion && prOccasion !== '') {
      return (
        <div className="product-detail__text">
          <div className="product-detail__label">
            Occasion: {prOccasion}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
  const PrButtonGroup = () => (
    <div 
      className="product-detail__button-group"
      onClick={() => reduxDispatch(addToCart({...prDetail, amount: prAmount, page: page}))}
    >
      <Link href='/checkout'>
        <a className="product-detail__order-btn">Order now</a>
      </Link>
      <div
        className="product-detail__cart-btn"
        onClick={() => reduxDispatch(addToCart({...prDetail, amount: prAmount, page: page}))}
      >
        <img src="/svgs/cart-btn-square.svg" alt="add to cart" />

        <span
          ref={addedToCartRef}
          className="product-detail__cart-btn--hidden"
        >
          <img src="/svgs/check-solid.svg" alt="added item to cart" />
        </span>
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
      >
        {
          Array.isArray(content) === true ? content.map((item, index) => {
            if (content.length === index + 1) {
              return item;
            }

            return item + ", "
          }) : content
        }
      </div>
    </div>
  );

  // array contents of buttons
  const listContentButton = [
    {title: 'Bouquet contents', content: 'No content yet'},
    {title: 'Includes', content: prIncludes},
    {
      title: 'Delivery & Pay policy',
      content: 'Each bouquet is unique and is prepared by an expert florist and our customer service team is at your service to ensure the best experience possible.'
    },
  ];

  return (
    <div className="product-detail__infor">
      <PrName>{prName}</PrName>
      <PrPrice />
      <PrCounter />
      <PrTextGroup>
        <PrTypes />
        <PrOccasion />
      </PrTextGroup>
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
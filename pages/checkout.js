// next api
import Image from "next/image"
// head tags
import Title from "../components/title"
// components
import BreadCrumb from "../components/contents/breadcrumb"
import PageName from "../components/contents/page-name"
// react
import React from "react";

export default function Checkout ({productsAPI}) {
  // data storaged variable
  const listItem = [];
  // handle API
  productsAPI && productsAPI.forEach(
    (item, index) => {
      listItem.push(
        <Item 
          key={index}
          thumbnail={item.thumbnail}
          price={item.price}
          name={item.name}
        />
      );
    }
  );

  return (
    <div className="checkout">
      <Title>Checkout | Cassiopeia | Flower store</Title>

      <BreadCrumb />
      <PageName>Checkout</PageName>
      <div className="checkout__container">
        <CheckoutContent />
        <OrderContainer listItem={listItem} />
      </div>
    </div>
  )
}

const Item = (props) => {
  return (
    <div className="checkout__item">
      <div className="checkout__item-avatar">
        <Image src={props.thumbnail} width={100} height={100} alt="thumbnail" />
      </div>
      <div className="checkout__item-infor">
        <div>
          <span>{props.name}</span>
          <span>${props.price}</span>
        </div>

        <div>
          <img src="/svgs/minus-btn.svg" alt="minus button" />
          <span>1</span>
          <img src="/svgs/plus-btn.svg" alt="plus button" />
        </div>
      </div>
    </div>
  )
}

const OrderContainer = ({listItem}) => {
  // total items
  const countTotalItems = listItem.length;
  // component partials
  const CheckoutField = () => {
    return (
      <div className="checkout__field-container">
        <div className="checkout__field">
          <span>Shipping</span>
          <span>FREE</span>
        </div>

        <div className="checkout__field">
          <span>Order total</span>
          <span>$00.00</span>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout__order">
      <div className="checkout__order-name">
        Order total <span>({countTotalItems})</span>
      </div>
      {listItem}
      <CheckoutField />
    </div>
  )
}

const CheckoutContent = () => {
  // Progress component
  const CheckoutProgress = () => {
    // list button
    const listButtons = [
      {stage: 1, title: 'Contacts'},
      {stage: 2, title: 'Shipping'},
      {stage: 3, title: 'Payment'},
    ];
    const ProgressButton = ({stage, title}) => {
      return (
        <div className="checkout__progress-btn checkout__progress-btn--current">
          <div className="finished">{stage}</div>
          <span>{title}</span>
        </div>
      )
    }

    const ProgressLine = () => {
      return (
        <div className="checkout__progress-line"></div>
      )
    }

    return (
      <div className="checkout__progress">
        {
          listButtons.map((item, index)=>{
            if (index === 2) {
              return (
                <ProgressButton key={index} stage={item.stage} title={item.title} />
              )
            }

            return (
              <React.Fragment key={index}>
                <ProgressButton stage={item.stage} title={item.title} />
                <ProgressLine />
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }

  // Button group components
  const ButtonGroup = () => {
    // Next button
    const NextButton = ({name = 'Shipping'}) => {
      return (
        <div className="checkout__button-next">
          <span>{name}</span>
          <img src="/svgs/line-right-arrow.svg" alt="right arrow" />
        </div>
      )
    }
    // Previous button
    const PreButton = () => {
      return (
        <div className="checkout__button-pre">
          <img src="/svgs/line-left-arrow-black.svg" alt="left arrow" />
          <span>Back step</span>
        </div>
      )
    }

    return (
      <div className="checkout__button-group">
        <PreButton />
        <NextButton />
      </div>
    )
  }

  return (
    <div className="checkout__content">
      <CheckoutProgress />
      <ButtonGroup />
    </div>
  )
}

export async function getStaticProps () {
  const productsAPI = [
    {
      name: 'White Lilies and Gerberas', price: '54',
      thumbnail: '/5cdd463408a93217111334_xbpxkx.webp'
    },
    {
      name: 'Red Roses and White Lilies', price: '99',
      thumbnail: '/5d84dc1a631b2292689077_nihv8m.webp'
    },
    {
      name: 'Chrysanthemums and Roses', price: '44',
      thumbnail: '/5d19dc8cc0983744838000_xc256j.webp'
    },
  ];

  return {
    props: {productsAPI}
  }
}
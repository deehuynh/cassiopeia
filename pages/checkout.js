// next api
import Image from "next/image"
// head tags
import Title from "../components/title"
// components
import BreadCrumb from "../components/contents/breadcrumb"
import PageName from "../components/contents/page-name"
// react
import React, { useState } from "react";

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
  // button states
  const [buttonStates, setButtonStates] = useState('contacts');
  // Progress component
  const CheckoutProgress = () => {
    let currentStageClass = '';
    // list button
    const listButtons = [
      {stage: 1, title: 'Contacts'},
      {stage: 2, title: 'Shipping'},
      {stage: 3, title: 'Payment'},
    ];
    const ProgressButton = ({stage, title, addedClass}) => {
      return (
        <div className={`checkout__progress-btn` + addedClass}>
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
            if (item.stage === 1 && buttonStates === 'contacts') {
              currentStageClass = ' checkout__progress-btn--current'
            } else if (item.stage === 2 && buttonStates === 'shipping') {
              currentStageClass = ' checkout__progress-btn--current'
            } else if (item.stage === 3 && buttonStates === 'payment') {
              currentStageClass = ' checkout__progress-btn--current'
            } else {
              currentStageClass = '';
            }

            if (index === 2) {
              return (
                <ProgressButton
                  key={index} stage={item.stage} title={item.title}
                  addedClass={currentStageClass} 
                />
              )
            }

            return (
              <React.Fragment key={index}>
                <ProgressButton 
                  stage={item.stage} title={item.title} addedClass={currentStageClass} 
                />
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
    const handlerNextStage = () => {
      if (buttonStates === 'contacts') {
        setButtonStates('shipping');
      } else if (buttonStates === 'shipping') {
        setButtonStates('payment');
      }
    }

    const handlerPreStage = () => {
      if (buttonStates === 'shipping') {
        setButtonStates('contacts');
      } else if (buttonStates === 'payment') {
        setButtonStates('shipping');
      }
    }
    // Next button
    const NextButton = ({name = 'Shipping'}) => {
      return (
        <div className="checkout__button-next" onClick={handlerNextStage}>
          <span>{name}</span>
          <img src="/svgs/line-right-arrow.svg" alt="right arrow" />
        </div>
      )
    }
    // Previous button
    const PreButton = () => {
      return (
        <div className="checkout__button-pre" onClick={handlerPreStage}>
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
  // Contacts component
  const CheckoutContacts = () => {
    return (
      <div className="checkout__contacts">
        contacts
      </div>
    )
  }
  // Contacts component
  const CheckoutShipping = () => {
    return (
      <div className="checkout__shipping">
        <p>Delivery method</p>
        <div className="checkout__shipping-delivery">
          <div>
            <input type="radio" />
          </div>
          <div>
            <span>Pick up</span>
            <span>Today, pick up is available in 2 stores</span>
          </div>
        </div>

        <div className="checkout__shipping-delivery">
          <div>
            <input type="radio" />
          </div>
          <div>
            <span>Courier</span>
            <span>About 2 days</span>
          </div>
        </div>

        <p>Delivery address</p>
      </div>
    )
  }
  // Contacts component
  const CheckoutPayment = () => {
    return (
      <div className="checkout__payment">
        payment
      </div>
    )
  }

  if (buttonStates === 'contacts') {
    return (
      <div className="checkout__content">
        <CheckoutProgress />
        <CheckoutContacts />
        <ButtonGroup />
      </div>
    )
  }

  if (buttonStates === 'shipping') {
    return (
      <div className="checkout__content">
        <CheckoutProgress />
        <CheckoutShipping />
        <ButtonGroup />
      </div>
    )
  }

  if (buttonStates === 'payment') {
    return (
      <div className="checkout__content">
        <CheckoutProgress />
        <CheckoutPayment />
        <ButtonGroup />
      </div>
    )
  }
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
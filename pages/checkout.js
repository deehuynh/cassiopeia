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
    let finishedStageClass = '';
    let finishedLineClass = '';
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

    const ProgressLine = ({addedClass}) => {
      return (
        <div className={`checkout__progress-line` + addedClass}></div>
      )
    }

    return (
      <div className="checkout__progress">
        {
          listButtons.map((item, index)=>{
            if (item.stage === 1 && buttonStates === 'contacts') {
              currentStageClass = ' checkout__progress-btn--current'
            } else if (item.stage === 2 && buttonStates === 'shipping') {
              finishedLineClass = '';
              currentStageClass = ' checkout__progress-btn--current';
            } else if (item.stage === 3 && buttonStates === 'payment') {
              currentStageClass = ' checkout__progress-btn--current'
            } else if (buttonStates !== 'contacts') {
              finishedStageClass = ' checkout__progress-btn--finished';
              finishedLineClass = ' checkout__progress-line--finished';
              currentStageClass = '';
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
                  stage={item.stage} title={item.title}
                  addedClass={currentStageClass !== '' ? currentStageClass : finishedStageClass} 
                />
                <ProgressLine addedClass={finishedLineClass} />
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
    const NextButton = () => {
      const name = buttonStates === 'shipping' ? 'Payment' : 'Shipping';
      return (
        <div className="checkout__button-next" onClick={handlerNextStage}>
          <span>{name === 'Shipping' && buttonStates === 'payment' ? 'Submit' : name}</span>
          <img src="/svgs/line-right-arrow.svg" alt="right arrow" />
        </div>
      )
    }
    // Previous button
    const PreButton = () => {
      const addedClass = buttonStates !== 'contacts' ? ' checkout__button-pre--current' : '';
      return (
        <div className={`checkout__button-pre` + addedClass} onClick={handlerPreStage}>
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
        <p>Fill in your information</p>
        <div className="checkout__contacts-infor">
          <div className="checkout__contacts-name">
            <input type="text" placeholder='Full name' spellCheck='false' />
          </div>
          <div className="checkout__contacts-phone">
            <input type="text" placeholder='Phone number' spellCheck='false' />
          </div>
        </div>

        <div className="checkout__contacts-gender">
          <span>Gender:</span>
          <label htmlFor="gender-male">Male</label>
          <input id="gender-male" type="radio" name='radio' />
          <label htmlFor="gender-female">Female</label>
          <input id="gender-female" type="radio" name='radio' />
        </div>
      </div>
    )
  }
  // Contacts component
  const CheckoutShipping = () => {
    // delivery method state
    const [deliveryMothodState, setDeliveryMethodState] = useState('Courier');
    
    return (
      <div className="checkout__shipping">
        <p>Delivery method</p>
        <div className="checkout__shipping-delivery">
          <div>
            <img src="/svgs/radio-unchecked.svg" alt="radio" />
          </div>
          <div>
            <span>Pick up</span>
            <span>Today, pick up is available in 2 stores</span>
          </div>
        </div>

        <div className="checkout__shipping-delivery checkout__shipping-delivery--checked">
          <div>
            <img src="/svgs/radio-checked.svg" alt="radio" />
          </div>
          <div>
            <span>Courier</span>
            <span>About 2 days</span>
          </div>
        </div>

        <p>Delivery address</p>
        <div className="checkout__shipping-address">
          <select>
            <option value="Hanoi">Ha Noi</option>
            <option value="HCM city">HCM city</option>
          </select>

          <input type="text" defaultValue='100 Le Duan Street' placeholder='Address...' spellCheck="false" />
        </div>

        <p>Available stores</p>
        <div className="checkout__shipping-store">
          <select>
            <option value="">120 Nguyen Thai Hoc Street, Pham Ngu Lao Ward, Hoang Mai district, Ha Noi</option>
            <option value="">233 Cong Hoa Street, 13 Ward, Tan Binh district, HCM city</option>
          </select>
        </div>

        <p>Date & time of receipt</p>
        <div className="checkout__shipping-pickup">
          <input className='checkout__shipping-date' type="text" placeholder='dd/mm/yyyy' defaultValue='10/12/2022' />
          <input className='checkout__shipping-time' type="text" placeholder='00:00' defaultValue='9.00 am' />
        </div>
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
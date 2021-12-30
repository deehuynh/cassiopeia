// next api
import Image from "next/image"
import Link from "next/link"
// react
import React, { useState, useEffect } from "react";
// head tags
import Title from "../components/title"
// components
import BreadCrumb from "../components/contents/breadcrumb"
import PageName from "../components/contents/page-name"
// redux
import { useSelector } from "react-redux"
// handle data functions
import USDCurrency from "../handle_data_functions/usd-currency";

export default function Checkout ({creditCards, gateways}) {
  // error server and client is not match
  const [isClientSide, setIsClientSide] = useState(false)
  // two-pass rendering
  useEffect(() => {
    setIsClientSide(true)
  }, [])
  // get order items from redux cart store
  const orderItems = useSelector(state => state.cart ? state.cart["items"] : [])
  // get cart promocode
  const promocode = useSelector(state => state.cart ? state.cart["promocode"] : null)
  // finished payment state
  const [finishedPaymentState, setFinishPaymentState] = useState(false);
  // data storaged variable
  const listItem = [];
  // count order total
  let orderTotal = 0;
  // count order price total
  let orderPriceTotal = 0;
  // handle API
  isClientSide === true && orderItems.forEach(
    (item, index) => {
      // count total order items
      orderTotal += item.amount 
      // count total price
      orderPriceTotal += Number(item.price) * item.amount

      listItem.push(
        <Item 
          key={index}
          thumbnail={item.thumbnail}
          price={item.price}
          name={item.name}
          amount={item.amount}
        />
      );
    }
  );

  return (
    <div className="checkout">
      <Title>Checkout | Cassiopeia | Flower store</Title>

      <BreadCrumb />
      <PageName>Checkout</PageName>

      {
        finishedPaymentState === false ? (
          <div className="checkout__container">
            <CheckoutContent 
              creditCards={creditCards} gateways={gateways}
              setFinishPaymentState={setFinishPaymentState} 
            />
            <OrderContainer 
              listItem={listItem} orderTotal={orderTotal}
              orderPriceTotal={orderPriceTotal}
              promocode={isClientSide ? promocode : null}
            />
          </div>
        ) : (
          <div className="checkout__submited">
            <span>Submited <img src="/svgs/checked.svg" alt="check" /></span>
            <Link href="/">
              <a>Come back home</a>
            </Link>
          </div>
        )
      }
    </div>
  )
}

const Item = (props) => {
  const priceTotal = Number(props.price) * props.amount

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
          <span>Quantity: {props.amount}</span>
          <span>{USDCurrency(priceTotal)}</span>
        </div>
      </div>
    </div>
  )
}

const OrderContainer = ({listItem, orderTotal, orderPriceTotal, promocode}) => {
  // get number of promocode
  const promocodeNumber = promocode ? promocode["number"] : 0
  // component partials
  const CheckoutField = () => {
    return (
      <div className="checkout__field-container">
        <div className="checkout__field">
          <span>Shipping</span>
          <span>FREE</span>
        </div>

        {
          promocode ? (
            <div className="checkout__field">
              <span>Promocode</span>
              <span>- {USDCurrency(promocodeNumber)}</span>
            </div>
          ) : ''
        }

        <div className="checkout__field">
          <span>Order total</span>
          <span>{USDCurrency(orderPriceTotal - promocodeNumber)}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout__order">
      <div className="checkout__order-name">
        Order total <span>({orderTotal})</span>
      </div>
      {listItem}
      <CheckoutField />
    </div>
  )
}

const CheckoutContent = ({creditCards, gateways, setFinishPaymentState}) => {
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
      } else if (buttonStates === 'payment') {
        setButtonStates('complete');
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
  // Shipping component
  const CheckoutShipping = () => {
    // delivery method state
    const [deliveryMethodState, setDeliveryMethodState] = useState('courier');
    // delivery method
    const CheckoutDeliveryMothod = () => {
      if (deliveryMethodState === 'pickup') {
        return (
          <>
            <p>Available stores</p>
            <div className="checkout__shipping-store">
              <div>
                <input type="radio" name="radio" checked />
                <span>120 Nguyen Thai Hoc Street, Pham Ngu Lao Ward, Hoang Mai district, Ha Noi</span>
              </div>

              <div>
                <input type="radio" name="radio" />
                <span>233 Cong Hoa Street, 13 Ward, Tan Binh district, HCM city</span>
              </div>
            </div>
  
            <p>Date & time of receipt</p>
            <div className="checkout__shipping-pickup">
              <input className='checkout__shipping-date' type="text" placeholder='dd/mm/yyyy' defaultValue='' />
              <input className='checkout__shipping-time' type="text" placeholder='00:00' defaultValue='' />
            </div>
          </>
        )
      }

      return (
        <>
          <p>Delivery address</p>
          <div className="checkout__shipping-address">
            <select>
              <option value="Hanoi">Ha Noi</option>
              <option value="HCM city">HCM city</option>
            </select>

            <span></span>

            <input type="text" defaultValue='' placeholder='Address...' spellCheck="false" />
          </div>
        </>
      )
    }

    return (
      <div className="checkout__shipping">
        <p>Delivery method</p>
        <div
          className={
            deliveryMethodState === 'pickup' ?
            'checkout__shipping-delivery checkout__shipping-delivery--checked' :
            'checkout__shipping-delivery'
          }
          onClick={()=>{setDeliveryMethodState('pickup')}}
        >
          <div>
            {
              deliveryMethodState === 'pickup' ?
              <img src="/svgs/radio-checked.svg" alt="radio" /> :
              <img src="/svgs/radio-unchecked.svg" alt="radio" />
            }
          </div>
          <div>
            <span>Pick up</span>
            <span>Today, pick up is available in 2 stores</span>
          </div>
        </div>

        <div
          className={
            deliveryMethodState === 'courier' ?
            'checkout__shipping-delivery checkout__shipping-delivery--checked' :
            'checkout__shipping-delivery'
          }
          onClick={()=>{setDeliveryMethodState('courier')}}
        >
          <div>
            {
              deliveryMethodState === 'courier' ?
              <img src="/svgs/radio-checked.svg" alt="radio" /> :
              <img src="/svgs/radio-unchecked.svg" alt="radio" />
            }
          </div>
          <div>
            <span>Courier</span>
            <span>About 2 days</span>
          </div>
        </div>

        <CheckoutDeliveryMothod />
      </div>
    )
  }

  // Payment component
  const CheckoutPayment = ({creditCards, gateways}) => {
    // payment method state
    const [paymentState, setPaymentState] = useState(true);
    // select payment state
    const [selectPaymentState, setSelectPaymentState] = useState('');

    const CheckoutPaymentMethod = () => {
      if (paymentState === true) {
        return (
          <>
            <p>Credit cards</p>
            <div className="checkout__payment-group">
              {
                creditCards.map(
                  (item, index) => (
                    <div 
                      key={index}
                      className={selectPaymentState === item.name ? 'checkout__payment-card checkout__payment-card--selected' : 'checkout__payment-card'}
                      onClick={()=>{setSelectPaymentState(item.name)}}
                    >
                      <Image 
                        src={item.image}
                        width={136}
                        height={46}
                        layout="responsive"
                        alt={item.name}
                      />
                    </div>
                  )
                )
              }
            </div>

            <p>Online payment gateways</p>
            <div className="checkout__payment-group">
              {
                gateways.map(
                  (item, index) => (
                    <div 
                      key={index}
                      className={selectPaymentState === item.name ? 'checkout__payment-card checkout__payment-card--selected' : 'checkout__payment-card'}
                      onClick={()=>{setSelectPaymentState(item.name)}}
                    >
                      <Image 
                        src={item.image}
                        width={136}
                        height={46}
                        layout="responsive"
                        alt={item.name}
                      />
                    </div>
                  )
                )
              }
            </div>
          </>
        )
      }

      return <></>
    }

    const selectPaymentDeliveryClass = paymentState === false ? ' checkout__payment-method--checked' : '';
    const selectPaymentGatewaysClass = paymentState === true ? ' checkout__payment-method--checked' : '';

    return (
      <div className="checkout__payment">
        <p>Payment method</p>

        <div
          className={`checkout__payment-method` + selectPaymentDeliveryClass}
          onClick={()=>{setPaymentState(false)}}
        >
          {
            paymentState === false ?
            <img src="/svgs/radio-checked.svg" alt="radio" /> :
            <img src="/svgs/radio-unchecked.svg" alt="radio" />
          }
          <span>Payment on Delivery</span>
        </div>

        <div
          className={`checkout__payment-method` + selectPaymentGatewaysClass}
          onClick={()=>{setPaymentState(true)}}
        >
          {
            paymentState === true ?
            <img src="/svgs/radio-checked.svg" alt="radio" /> :
            <img src="/svgs/radio-unchecked.svg" alt="radio" />
          }
          <span>Online Payment</span>
        </div>

        <CheckoutPaymentMethod />
      </div>
    )
  }

  const CheckoutComplete = () => {
    return (
      <div className="checkout__complete">
        <div className="checkout__complete-status">
          <span>Checkout complete!</span>
          <span>Thank you for your order...</span>
        </div>
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
        <CheckoutPayment creditCards={creditCards} gateways={gateways} />
        <ButtonGroup />
      </div>
    )
  }

  if (buttonStates === 'complete') {
    return (
      <div className="checkout__content">
        <CheckoutProgress />
        <CheckoutComplete />
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

  const creditCards = [
    {name: 'visa', image: '/payment-card-visa_xbmobu.png'},
    {name: 'master', image: '/payment-card-master_hk7o4r.png'},
    {name: 'american-express', image: '/payment-card-american_wfurcp.png'},
    {name: 'jcb', image: '/payment-card-jcb_qb5auz.png'},
    {name: 'discover', image: '/payment-card-discover_jhud7f.png'},
  ];

  const gateways = [
    {name: 'paypal', image: '/payment-gateway-paypal_hp0gag.png'},
    {name: 'stripe', image: '/payment-card-stripe_odvihl.png'},
  ];

  return {
    props: {productsAPI, creditCards, gateways}
  }
}
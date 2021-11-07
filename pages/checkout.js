// next api
import Image from "next/image"
// head tags
import Title from "../components/title"
// components
import BreadCrumb from "../components/contents/breadcrumb"
import PageName from "../components/contents/page-name"

export default function Checkout ({productsAPI}) {
  // component partials
  const OrderContainer = ({listItem}) => {
    return (
      <div className="checkout__order">
        <div className="checkout__order-name">
          Order total <span>(1)</span>
        </div>
        {listItem}
      </div>
    )
  }

  const CheckoutContent = ({children}) => {
    return (
      <div className="checkout__content">
        {children}
      </div>
    )
  }

  const Item = (props) => {
    return (
      <div className="checkout__item">
        <div className="checkout__item-avatar">
          <Image src={props.thumbnail} width={100} height={100} alt="thumbnail" />
        </div>
        <div className="cart-modal__infor">
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
        <CheckoutContent>1</CheckoutContent>
        <OrderContainer listItem={listItem} />
      </div>
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
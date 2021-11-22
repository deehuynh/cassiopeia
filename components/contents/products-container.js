// react api
import { useState } from "react";
// components
import Item from "../contents/item"

export default function ProductsContainer ({allProducts}) {
  // pagination state
  const [limitPr, setLimitPr] = useState(8);
  // data storaged variable
  const products = [];
  // data fetching
  allProducts && allProducts.reverse().forEach((item, index) => {
    if (index < limitPr) {
      products.push(
        <Item 
          key={index}
          id={index}
          className='content__item--restyled'
          thumbnail={item.thumbnail}
          name={item.name}
          price={item.price}
          oldPrice={item.oldPrice}
        />
      );
    }
  });
  return (
    <div className="products-container">
      {products}

      {
        allProducts && allProducts.length === products.length ? '' : (
          <SeeMore limitPr={limitPr} setLimitPr={setLimitPr} />
        )
      }
    </div>
  )
}

function SeeMore ({limitPr, setLimitPr}) {
  const handlePagination = () => {
    setLimitPr(limitPr + 8);
  }

  return (
    <div onClick={handlePagination} className="products-container__seemore">
      <span>See more</span>
    </div>
  )
}
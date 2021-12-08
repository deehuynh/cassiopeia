// react api
import { useState } from "react";
// components
import Item from "../contents/item"

export default function ProductsContainer ({allProducts, page}) {
  // pagination state
  const [limitPr, setLimitPr] = useState(4);
  // data storaged variable
  const products = [];
  // data fetching
  allProducts && allProducts.forEach((item, index) => {
    if (index < limitPr) {
      products.push(
        <Item 
          key={index}
          id={item.id}
          page={page}
          className='content__item--restyled'
          thumbnail={item.thumbnail}
          imageType={item.imageType ? item.imageType : ""}
          name={item.name}
          price={item.price}
          oldPrice={item.oldPrice}
          item={item}
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
    setLimitPr(limitPr + 4);
  }

  return (
    <div onClick={handlePagination} className="products-container__seemore">
      <span>See more</span>
    </div>
  )
}
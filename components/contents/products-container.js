// components
import Item from "../contents/item"

export default function ProductsContainer ({allProducts}) {
  // data storaged variable
  const products = [];
  // data fetching
  allProducts && allProducts.reverse().forEach((item, index) => {
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
  });
  return (
    <div className="products-container">
      {products}

      {
        allProducts && allProducts.length > 3 ? (
          <SeeMore />
        ) : ''
      }
    </div>
  )
}

function SeeMore () {
  return (
    <div className="products-container__seemore">
      <span>See more</span>
    </div>
  )
}
// react api
import { useEffect, useState } from "react"
// redux
import { useSelector } from "react-redux"
// head tag's title
import Title from "../../components/title"
import Description from "../../components/description"
import OpenGraph from "../../components/open-graph"
import Keywords from "../../components/keywords"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import ProductsContainer from "../../components/contents/products-container"
import FilterBar from "../../components/contents/filter-bar"
import NoProductsFound from "../../components/contents/no-products-found"

export default function Gifts ({allFilters, allProducts}) {
  const countPr = allProducts && allProducts.length
  // products state
  const [productState, setProductState] = useState(allProducts);
  // no products found state
  const [isEmptyData, setIsEmptyData] = useState(false);
  // get redux data
  const giftsData = useSelector(state => state.pages.gifts)
  // push allProducts to redux store
  useEffect(() => {
    if (giftsData.error === 'No products found') {
      setIsEmptyData(true)
    } else if (giftsData.length !== 0) {
      setProductState(giftsData)
      setIsEmptyData(false)
    }
  }, [giftsData])

  // reset page data
  useEffect(() => {
    setProductState(allProducts)
    setIsEmptyData(false)
  }, [allProducts])

  return (
    <div className="gifts">
      <Title>Gifts | Cassiopeia</Title>
      <Description>
        Where you can buy special and beautiful gifts.
        Safe and Fast Delivery. Payment Online or Checkout on Delivery.
      </Description>
      <Keywords>gifts, chocolate, wine gift</Keywords>
      <OpenGraph
        name="Gifts | Cassiopeia"
        desc="Where you can buy special and beautiful gifts.
          Safe and Fast Delivery. Payment Online or Checkout on Delivery."
        image="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/6184e2a2c71d4438542627_moioxi.webp"
      />

      <BreadCrumb />
      <PageName>Gifts</PageName>
      <FilterBar 
        allFilters={allFilters} countPr={countPr} page="gifts"
        allProducts={allProducts}
      />
      
      {
        isEmptyData === false ?
        <ProductsContainer page="gifts" allProducts={productState} /> :
        <NoProductsFound text={giftsData.type} />
      }
    </div>
  )
}

export async function getStaticProps() {
  const allFilters = [
    {
      name: 'Sort by',
      children: [
        'Newest',
        'Oldest',
        'Low to high',
        'High to low'
      ]
    }, {
        name: 'Price',
        children: [
          'Under $50', '$50 - $100',
          'Over $100'
        ]
    }, {
        name: 'Occasion',
        children: [
          'Valentine',
          'New year'
        ]
    }
  ];

  const res = await fetch('https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/gifts.json');
  const dataList = await res.json()
  const allProducts = dataList.reverse()

  return {
    props: {
      allFilters,
      allProducts
    }
  }
}
// react api
import { useEffect, useState } from "react"
// redux
import { useSelector } from "react-redux"
// the head tag's title
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import FilterBar from "../../components/contents/filter-bar"
import ProductsContainer from "../../components/contents/products-container"
import NoProductsFound from "../../components/contents/no-products-found"

export default function Flowers ({allFilters, allProducts}) {
  // count products
  const countPr = allProducts && allProducts.length;
  // products state
  const [productState, setProductState] = useState(allProducts);
  // no products found state
  const [isEmptyData, setIsEmptyData] = useState(false);
  // get redux data
  const flowersData = useSelector(state => state.pages.flowers)
  // push allProducts to redux store
  useEffect(() => {
    if (flowersData.error === "No products found") {
      setIsEmptyData(true)
    } else if (flowersData.length !== 0) {
      setProductState(flowersData)
      setIsEmptyData(false)
    }
  }, [flowersData])

  // reset page data
  useEffect(() => {
    setProductState(allProducts)
    setIsEmptyData(false)
  }, [allProducts])
  
  return (
    <div className="flowers">
      <Title>Flowers | Cassiopeia | Flower store</Title>

      <BreadCrumb />
      <PageName>Flowers</PageName>
      <FilterBar 
        allFilters={allFilters} allProducts={allProducts} 
        page="flowers"
        countPr={countPr} 
      />

      {
        isEmptyData === false ? 
          <ProductsContainer page="flowers" allProducts={productState} /> : 
          <NoProductsFound text={flowersData.type} />
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
          'Under $10', '$10 - $50',
          '$50 - $100', 'Over $100'
        ]
    }, {
        name: 'Type',
        children: [
          'Roses', 'Lilies',
          'Gerberas', 'Chrysanthemums',
          'Lisianthus', 'Alstroemerias'
        ]
    }, {
        name: 'Occasion',
        children: [
          'Wedding',
          'Birthday',
          'Christmas'
        ]
    }
  ];

  const res = await fetch(`https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/flowers.json`);
  const data = await res.json();
  const allProducts = data.reverse();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      allFilters,
      allProducts
    }
  }
}
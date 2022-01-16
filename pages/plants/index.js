// react api
import { useEffect, useState } from "react"
// redux
import { useSelector } from "react-redux"
// the head tag's title
import Title from "../../components/title"
import Description from "../../components/description"
import OpenGraph from "../../components/open-graph"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import FilterBar from "../../components/contents/filter-bar"
import ProductsContainer from "../../components/contents/products-container"
import NoProductsFound from "../../components/contents/no-products-found"

export default function Plants ({allFilters, allProducts}) {
  // count products
  const countPr = allProducts && allProducts.length;
  // products state
  const [productState, setProductState] = useState(allProducts);
  // no products found state
  const [isEmptyData, setIsEmptyData] = useState(false);
  // get redux data
  const plantsData = useSelector(state => state.pages.plants)
  // push allProducts to redux store
  useEffect(() => {
    if (plantsData.error === 'No products found') {
      setIsEmptyData(true)
    } else if (plantsData.length !== 0) {
      setProductState(plantsData)
      setIsEmptyData(false)
    }
  }, [plantsData])

  // reset page data
  useEffect(() => {
    setProductState(allProducts)
    setIsEmptyData(false)
  }, [allProducts])

  return (
    <div className="plants">
      <Title>Plants | Cassiopeia</Title>
      <Description>
        Where you can buy beautiful and good quality plants.
        Safe and Fast Delivery. Payment Online or Checkout on Delivery.
      </Description>
      <OpenGraph
        name="Plants | Cassiopeia"
        desc="Where you can buy beautiful and good quality plants.
        Safe and Fast Delivery. Payment Online or Checkout on Delivery."
        image="https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/61694097bfc2b371726052_njjyar.webp"
      />

      <BreadCrumb tabName={{url: '/plants', name: 'Plants'}} />
      <PageName>Plants</PageName>
      <FilterBar 
        allFilters={allFilters} allProducts={allProducts}
        page="plants"
        countPr={countPr} 
      />
      
      {
        isEmptyData === false ? 
        <ProductsContainer page="plants" allProducts={productState} /> :
        <NoProductsFound text={plantsData.type} />
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
          'Under $20', '$20 - $70',
          '$70 - $100', 'Over $100'
        ]
    }, {
        name: 'Type',
        children: [
          'Orchid', 'Dendrobium',
          'Anthurium', 'Spathiphyllum',
          'Pine tree', 'Calathea zebrina'
        ]
    }, {
        name: 'Occasion',
        children: [
          'Valentine',
          'Christmas'
        ]
    }
  ];

  const res = await fetch('https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/plants.json');
  const allPlants = await res.json()
  const allProducts = allPlants.reverse()

  return {
    props: {
      allFilters,
      allProducts
    }
  }
}
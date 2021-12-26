// head tag's title
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import ProductsContainer from "../../components/contents/products-container"
import FilterBar from "../../components/contents/filter-bar"

export default function Gifts ({allFilters, allProducts}) {
  const countPr = allProducts && allProducts.length

  return (
    <div className="gifts">
      <Title>Gifts | Cassiopeia | Flower store</Title>

      <BreadCrumb />
      <PageName>Gifts</PageName>
      <FilterBar allFilters={allFilters} countPr={countPr} />
      <ProductsContainer page="gifts" allProducts={allProducts} />
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
          'Christmas',
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
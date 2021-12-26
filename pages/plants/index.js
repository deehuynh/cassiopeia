// the head tag's title
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import FilterBar from "../../components/contents/filter-bar"
import ProductsContainer from "../../components/contents/products-container"

export default function Plants ({allFilters, allProducts}) {
  // count products
  const countPr = allProducts && allProducts.length;

  return (
    <div className="plants">
      <Title>Plants | Cassiopeia | Flower store</Title>

      <BreadCrumb tabName={{url: '/plants', name: 'Plants'}} />
      <PageName>Plants</PageName>
      <FilterBar 
        allFilters={allFilters} allProducts={allProducts}
        page="plants"
        countPr={countPr} 
      />
      <ProductsContainer page="plants" allProducts={allProducts} />
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
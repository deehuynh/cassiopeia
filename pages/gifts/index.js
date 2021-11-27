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
      children: {
        name: 'low to high',
        name: 'high to low',
      }
    }, {
        name: 'Color',
        children: {
          name: 'Red',
          name: 'Pink',
          name: 'White',
        }
    }, {
        name: 'Price',
        children: {
          name: 'Under 10$',
          name: '10$ - 50$',
          name: '50$ - 100$',
          name: 'Over 100$',
        }
    }, {
        name: 'Type',
        children: {
          name: 'Rose',
          name: 'Lily'
        }
    }, {
        name: 'Occasion',
        children: {
          name: 'wedding',
          name: 'happy birthday',
          name: 'event',
        }
    },
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
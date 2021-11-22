// the head tag's title
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import FilterBar from "../../components/contents/filter-bar"
import ProductsContainer from "../../components/contents/products-container"

export default function Flowers ({allFilters, allProducts}) {
  
  return (
    <div className="flowers">
      <Title>Flowers | Cassiopeia | Flower store</Title>

      <BreadCrumb />
      <PageName>Flowers</PageName>
      <FilterBar allFilters={allFilters} />

      <ProductsContainer allProducts={allProducts} />
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

  const res = await fetch(`https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/flowers.json`);
  const allProducts = await res.json();

  if (!allProducts) {
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
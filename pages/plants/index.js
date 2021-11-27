// the head tag's title
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import PageName from "../../components/contents/page-name"
import FilterBar from "../../components/contents/filter-bar"
import ProductsContainer from "../../components/contents/products-container"

export default function Plants ({allFilters, allPlants}) {
  return (
    <div className="plants">
      <Title>Plants | Cassiopeia | Flower store</Title>

      <BreadCrumb tabName={{url: '/plants', name: 'Plants'}} />
      <PageName>Plants</PageName>
      <FilterBar allFilters={allFilters} />
      <ProductsContainer allProducts={allPlants} />
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

  return {
    props: {
      allFilters
    }
  }
}
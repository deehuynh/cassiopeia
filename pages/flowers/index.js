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

  const allProducts = [
    {
      name: 'White Lilies and Gerberas', price: '54', oldPrice: '',
      thumbnail: '/5cdd463408a93217111334_xbpxkx.webp'
    },
    {
      name: 'Red Roses and White Lilies', price: '99', oldPrice: '',
      thumbnail: '/5d84dc1a631b2292689077_nihv8m.webp'
    },
    {
      name: 'Chrysanthemums and Roses', price: '44', oldPrice: '',
      thumbnail: '/5d19dc8cc0983744838000_xc256j.webp'
    },
    {name: 'Roses and Lilies', price: '69', oldPrice: '82', thumbnail: '/5d84d46e1fe63737087781_eztymk.webp'},
    {name: 'Lilies And Roses', price: '39', oldPrice: '50', thumbnail: '/5d84d53800517236157520_awcivk.webp'}
  ];

  return {
    props: {
      allFilters,
      allProducts
    }
  }
}
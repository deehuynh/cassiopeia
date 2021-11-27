// head tag's title
import Title from "../../components/title"
// components
import BreadCrumb from "../../components/contents/breadcrumb"
import ProductsContainer from "../../components/contents/products-container"
import FilterBar from "../../components/contents/filter-bar"

export default function Gifts () {
  return (
    <div className="gifts">
      <Title>Gifts | Cassiopeia | Flower store</Title>

      <BreadCrumb />
      <FilterBar />
      <ProductsContainer />
    </div>
  )
}
// next api
import Image from "next/image"
import Link from "next/link"
// redux
import { useSelector } from "react-redux"

export default function SearchModal () {
  // get searched items from global store
  const searchItems = useSelector(state => state.search)
  // storage items
  const storagedElements = []
  
  searchItems.forEach((item, index) => {
    storagedElements.push(
      <Item key={index} item={item} />
    )
  })

  return (
    <div className="search-modal">
      {storagedElements}
    </div>
  )
}

function Item ({item}) {
  return (
    <Link href={`/${item.page}/${item.id}`}>
    <a className="search-modal__item">
      <span className="search-modal__thumbnail">
        <Image 
          src={item.thumbnail}
          width={100}
          height={100}
          alt="product thumbnail"
        />
      </span>

      <span className="search-modal__group">
        <span className="search-modal__name">{item.name}</span>
        <span className="search-modal__price">${item.price}</span>
      </span>
    </a>
  </Link>
  )
}
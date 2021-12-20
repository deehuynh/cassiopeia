// next api
import Image from "next/image"
import Link from "next/link"
// redux
import { useSelector } from "react-redux"

export default function SearchModal ({searchModalRef}) {
  // get searched items from global store
  const searchItems = useSelector(state => state.search.data)
  // storage items
  const storagedElements = []
  
  searchItems.forEach((item, index) => {
    storagedElements.push(
      <Item key={index} item={item} />
    )
  })

  // get search value
  const searchValue = useSelector(state => state.search.value)
  console.log(searchValue)

  const handleShowModal = searchItems.length > 0 ? 'search-modal' : 'search-modal--hidden'

  return (
    <div ref={searchModalRef} className={handleShowModal}>
      {storagedElements}

      {
        storagedElements.length !== 0 ? 
        <div className="search-modal__scroll-btn">
          <img src="/svgs/top-arrow-i.svg" alt="button" />
        </div>
        : ''
      }
    </div>
  )}

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
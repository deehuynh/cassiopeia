/* eslint-disable @next/next/no-img-element */
// next api
import Link from "next/link"
// react api
import { useContext } from "react"
// context store
import { refContext } from "../contextStore"

export default function FilterModal () {
  const filterRef = useContext(refContext)

  const handleCloseModal = () => {
    filterRef.current.className = "filter-modal filter-modal--hidden"
  }

  return (
    <div ref={filterRef} className="filter-modal filter-modal--hidden">
      <header className="filter-modal__header">
        <div onClick={handleCloseModal} className="filter-modal__close-btn">
          <img src="/svgs/close-btn.svg" alt="close" />
        </div>
      </header>

      <Link href="/">
        <a className="filter-modal__tab">
          <span>Sort by</span>
          <img src="/svgs/dropdown-i.svg" alt="dropdown arrow" />
        </a>
      </Link>

      <Link href="/">
        <a className="filter-modal__tab">
          <span>Sort by</span>
          <img src="/svgs/dropdown-i.svg" alt="dropdown arrow" />
        </a>
      </Link>

      <Link href="/">
        <a className="filter-modal__tab">
          <span>Sort by</span>
          <img src="/svgs/dropdown-i.svg" alt="dropdown arrow" />
        </a>
      </Link>

      <Link href="/">
        <a className="filter-modal__tab">
          <span>Sort by</span>
          <img src="/svgs/dropdown-i.svg" alt="dropdown arrow" />
        </a>
      </Link>
    </div>
  )
}
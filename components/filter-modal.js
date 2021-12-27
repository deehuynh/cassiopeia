/* eslint-disable @next/next/no-img-element */
// next api
import Link from "next/link"

export default function FilterModal () {
  return (
    <div className="filter-modal">
      <header className="filter-modal__header">
        <div className="filter-modal__close-btn">
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
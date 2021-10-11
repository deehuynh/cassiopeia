import Link from "next/link"

export default function Header () {
  return (
    <header className="header">
      <div className="header__location">
        <img src="/svgs/location.svg" alt="location icon" />
        <span>Vietnam</span>
      </div>
      <div className="header__menu">
        <img src="/svgs/menu.svg" alt="menu" />
      </div>
      <div className="header__logo">
        <Link href="/">
          <a><img src="/svgs/logo.svg" alt="Logo" /></a>
        </Link>
      </div>
      <div className="header__group">
        <div className="header__search">
          <input type="text" defaultValue='' placeholder='Search' />
          <img src="/svgs/search.svg" alt="search icon" />
        </div>
        <div className="header__cart">
          <img src="/svgs/cart.svg" alt="cart icon" />
        </div>
      </div>
    </header>
  )
}
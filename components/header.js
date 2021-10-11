import Image from "next/image"

export default function Header () {
  return (
    <header className="header">
      <div className="header__location">
        <img src="/svgs/location.svg" alt="location icon" />
        <span>Vietnam</span>
      </div>
      <div className="header__logo">
        <img src="/svgs/logo.svg" alt="Logo" />
      </div>
      <div className="header__group">
        <div className="header__search">
          <img src="/svgs/search.svg" alt="search icon" />
        </div>
        <div className="header__cart">
          <img src="/svgs/cart.svg" alt="cart icon" />
        </div>
      </div>
    </header>
  )
}
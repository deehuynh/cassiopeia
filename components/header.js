import Link from "next/link"
import {useRef} from "react"
import handleShow from "../hooks/handleShow";

export default function Header () {
  const refContainer = useRef(null);

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
          <input
            ref={refContainer}
            className='header__search--hiden'
            type="text" defaultValue='' placeholder='Search' 
          />
          <img 
            onClick={() => {handleShow(refContainer, 'header__search--hiden', 'header__search--show')}} 
            src="/svgs/search.svg" alt="search icon" />
        </div>
        <div className="header__cart">
          <img src="/svgs/cart.svg" alt="cart icon" />
        </div>
      </div>
    </header>
  )
}
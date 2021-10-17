import Link from "next/link"
import {useRef} from "react"
import handleShow from "../hooks/handleShow";
import handleShowButton from "../hooks/handleShowButton"

export default function Header (props) {
  const refContainer = useRef(null);
  const openNavRef = useRef(null);
  const closeNavRef = useRef(null);

  return (
    <header className="header">
      <div className="header__location">
        <img src="/svgs/location.svg" alt="location icon" />
        <span>Vietnam</span>
      </div>
      <div className="header__menu">
        <img
          className='show'
          ref={openNavRef}
          onClick={
            ()=>{
              handleShow(props.navRef, 'nav nav--hiden', 'nav nav--show');
              handleShowButton(openNavRef, closeNavRef, 'show', 'hiden');
            }
          }
          src="/svgs/menu.svg" alt="menu"
        />

        <img 
          className='hiden'
          ref={closeNavRef}
          onClick={()=>{
            handleShow(props.navRef, 'nav nav--hiden', 'nav nav--show');
            handleShowButton(closeNavRef, openNavRef, 'show', 'hiden');
          }}
          src="/svgs/close.svg" alt="close menu" 
        />
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
            onClick={
              () => {
                handleShow(
                  refContainer, 'header__search--hiden', 'header__search--show'
                );
                handleShow(
                  props.searchRef, 'm-search__hiden', 'm-search'
                );
              }
            } 
            src="/svgs/search.svg" alt="search icon" />
        </div>
        <div className="header__cart">
          <img src="/svgs/cart.svg" alt="cart icon" />
        </div>
      </div>
    </header>
  )
}
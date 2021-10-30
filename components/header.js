/* eslint-disable @next/next/no-img-element */
import {useRef} from "react"
// next api
import Link from "next/link"
// functions
import handleShow from "../function/handleShow";
import handleShowButton from "../function/handleShowButton"
import preventBodyScroll from "../function/preventBodyScroll";
import effectOneButton from "../function/effectOneButton";

export default function Header (props) {
  // nav ref container
  const navRef = props.navRef;
  const openNavRef = props.openNavRef;
  const closeNavRef = props.closeNavRef;
  // search ref containers
  const mSearchRef = props.searchRef;
  const searchRef = useRef(null);
  const searchBtnRef = useRef(null);
  // cart ref containers
  const cartRef = props.cartRef;
  const openCartRef = useRef(null);
  const closeCartRef = useRef(null);

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
              handleShow(navRef, 'nav nav--hiden', 'nav nav--show');
              handleShowButton(openNavRef, closeNavRef, 'show', 'hiden');
              preventBodyScroll(true);
            }
          }
          src="/svgs/menu.svg" alt="menu"
        />

        <img 
          className='hiden'
          ref={closeNavRef}
          onClick={()=>{
            handleShow(navRef, 'nav nav--hiden', 'nav nav--show');
            handleShowButton(closeNavRef, openNavRef, 'show', 'hiden');
            preventBodyScroll(false);
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
            ref={searchRef}
            className='header__search--hiden'
            type="text" defaultValue='' placeholder='Search' 
          />
          <img
            ref={searchBtnRef}
            onClick={
              () => {
                handleShow(
                  searchRef, 'header__search--hiden', 'header__search--show'
                );
                handleShow(
                  mSearchRef, 'm-search__hiden', 'm-search'
                );
                effectOneButton(searchBtnRef, 'header__search-btn--opacity');
              }
            } 
            src="/svgs/search.svg" alt="search icon" />
        </div>

        <div className="header__cart">
          <img
            className="show"
            ref={openCartRef}
            onClick={()=>{
              handleShow(cartRef, 'cart-modal cart-modal__hidden', 'cart-modal cart-modal__show');
              preventBodyScroll(true);
              handleShowButton(openCartRef, closeCartRef, 'show', 'hiden');
            }}
            src="/svgs/cart.svg" alt="cart icon" 
          />

          <img
            className="hiden"
            ref={closeCartRef}
            onClick={()=>{
              handleShow(cartRef, 'cart-modal cart-modal__hidden', 'cart-modal cart-modal__show');
              preventBodyScroll(false);
              handleShowButton(closeCartRef, openCartRef, 'show', 'hiden');
            }}
            src="/svgs/close.svg" alt="cart icon" 
          />
        </div>
      </div>
    </header>
  )
}
/* eslint-disable @next/next/no-img-element */
import {useRef} from "react"
// next api
import Link from "next/link"
// functions
import handleShow from "../function/handleShow";
import handleShowButton from "../function/handleShowButton"
import preventBodyScroll from "../function/preventBodyScroll";
import effectOneButton from "../function/effectOneButton";
import preventOnClick from "../function/preventOnClick";
import handleBackHome from "../function/handleBackHome";
// redux cart store
import { useSelector, useDispatch } from "react-redux";
import { setValue, getItems, setSearchKey } from "../redux/searchSlice";
// components
import SearchInput from "./search-input";

export default function Header (props) {
  // handle cart store
  const totalCart = useSelector(state => state.cart ? state.cart["items"].length : 0)
  // nav ref container
  const navRef = props.navRef;
  const openNavRef = props.openNavRef;
  const closeNavRef = props.closeNavRef;
  // search ref containers
  const mSearchRef = props.searchRef;
  const searchRef = useRef(null);
  const searchBtnRef = useRef(null);
  const searchModalRef = props.searchModalRef;
  // cart ref containers
  const cartRef = props.cartRef;
  const openCartRef = props.openCartRef;
  const closeCartRef = props.closeCartRef;
  const orderCartRef = props.orderCartRef;
  // modal container refs
  const overlayModalRef = props.overlayModalRef

  // redux dispatch
  const dispatch = useDispatch()
  // reset search input function
  const handleResetSearchInput = () => {
    dispatch(setValue(''));
    dispatch(setSearchKey(''));
    dispatch(getItems([]));
  }

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
              preventOnClick(
                [{searchRef: '', mSearchRef: mSearchRef}, searchBtnRef],
                [{
                  contentRef: cartRef, hidden: 'cart-modal cart-modal__hidden'
                }, openCartRef, closeCartRef]
              );
              orderCartRef.current.className = "show";
              handleResetSearchInput();
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
          <a>
            <img 
              onClick={()=>{
                handleBackHome(
                  [
                    [{
                      contentRef: navRef, openRef: openNavRef,
                      closeRef: closeNavRef, hidden: 'nav nav--hiden'
                    }], [{
                      contentRef: mSearchRef, btnRef: searchBtnRef , hidden: 'm-search__hiden'
                    }], [{
                      contentRef: cartRef, openRef: openCartRef,
                      closeRef: closeCartRef, hidden: 'cart-modal cart-modal__hidden'
                    }]
                  ]
                ); preventBodyScroll(false);
                orderCartRef.current.className = "show";
                handleResetSearchInput();
              }}
              src="/svgs/logo.svg" alt="Logo" 
            />
          </a>
        </Link>
      </div>

      <div className="header__group">
        <div className="header__search">
          <SearchInput searchRef={searchRef} />
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
                preventBodyScroll(false);
                preventOnClick(
                  [{
                    contentRef: navRef, hidden: 'nav nav--hiden'
                  }, openNavRef, closeNavRef],
                  [{
                    contentRef: cartRef, hidden: 'cart-modal cart-modal__hidden'
                  }, openCartRef, closeCartRef]
                );
                orderCartRef.current.className = "show";
                searchModalRef.current.className="search-modal search-modal--hidden";
                handleResetSearchInput()
              }
            } 
            src="/svgs/search.svg" alt="search icon" />
        </div>

        <div className="header__cart">
          <span ref={orderCartRef} className="show" suppressHydrationWarning={true}>
            {
              totalCart === 0 ? '' : (
                <span 
                  className="header__cart-order"
                  onClick={()=>{
                    handleShow(cartRef, 'cart-modal cart-modal__hidden', 'cart-modal cart-modal__show');
                    handleShow(orderCartRef, 'hiden','show');
                    preventBodyScroll(true);
                    handleShowButton(openCartRef, closeCartRef, 'show', 'hiden');
                    preventOnClick(
                      [{
                        contentRef: navRef, hidden: 'nav nav--hiden'
                      }, openNavRef, closeNavRef],
                      [{searchRef: searchRef, mSearchRef: mSearchRef}, searchBtnRef]
                    );
                    handleResetSearchInput();
                    overlayModalRef.current.className = "modal-container__overlay modal-container__overlay--show"
                  }}
                >
                  {totalCart}
                </span>
              )
            }
          </span>

          <img
            className="show"
            ref={openCartRef}
            onClick={()=>{
              handleShow(cartRef, 'cart-modal cart-modal__hidden', 'cart-modal cart-modal__show');
              handleShow(orderCartRef, 'hiden','show');
              overlayModalRef.current.className = "modal-container__overlay modal-container__overlay--show"
              preventBodyScroll(true);
              handleShowButton(openCartRef, closeCartRef, 'show', 'hiden');
              preventOnClick(
                [{
                  contentRef: navRef, hidden: 'nav nav--hiden'
                }, openNavRef, closeNavRef],
                [{searchRef: searchRef, mSearchRef: mSearchRef}, searchBtnRef]
              );
              handleResetSearchInput()
            }}
            src="/svgs/cart.svg" alt="cart icon" 
          />

          <img
            className="hiden"
            ref={closeCartRef}
            onClick={()=>{
              handleShow(cartRef, 'cart-modal cart-modal__hidden', 'cart-modal cart-modal__show');
              handleShow(orderCartRef, 'hiden','show');
              overlayModalRef.current.className = "modal-container__overlay modal-container__overlay--hidden"
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
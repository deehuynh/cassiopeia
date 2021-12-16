//import hooks
import { useRef, useEffect } from "react"
// import component
import Meta from "./meta"
import Header from "./header"
import Nav from "./navigation"
import ModalContainer from "./modal-container"
import MobileSearch from "./mobile-search"
import Footer from "./footer"
// firebase analytics
import { analytics } from "../firebase"
import { logEvent } from "firebase/analytics"

export default function Layout ({ children }) {
  // global ref containers
  const searchRef = useRef(null);
  // modal container refs
  const overlayModalRef = useRef(null);
  // cart refs
  const cartRef = useRef(null);
  const openCartRef = useRef(null);
  const closeCartRef = useRef(null);
  const orderCartRef = useRef(null);
  // nav refs
  const navRef = useRef(null);
  const openNavRef = useRef(null);
  const closeNavRef = useRef(null);

  useEffect(()=>{
    if (analytics) {
      logEvent(analytics, 'notification_received');
    }

    // close cart modal
    window.onclick = e => {
      if (e.target.id === overlayModalRef.current.id) {
        overlayModalRef.current.className = "modal-container__overlay modal-container__overlay--hidden"
        openCartRef.current.className = "show"
        closeCartRef.current.className = "hiden"
        orderCartRef.current.className = "show"
        cartRef.current.className = "cart-modal cart-modal__hidden"
      }
    }
  });

  return (
    <div className="layout">
      <Meta />

      <Header 
        navRef={navRef} closeNavRef={closeNavRef} openNavRef={openNavRef}
        searchRef={searchRef}
        cartRef={cartRef} openCartRef={openCartRef} closeCartRef={closeCartRef}
        orderCartRef={orderCartRef}
        overlayModalRef={overlayModalRef}
      />

      <ModalContainer 
        cartRef={cartRef} openCartRef={openCartRef} closeCartRef={closeCartRef}
        orderCartRef={orderCartRef}
        overlayModalRef={overlayModalRef}
      />

      <Nav 
        navRef={navRef} closeNavRef={closeNavRef} openNavRef={openNavRef} 
      />
      
      <MobileSearch
        searchRef={searchRef}
      />

      <section className="content">
        {children}
      </section>

      <Footer />
    </div>
  )
}
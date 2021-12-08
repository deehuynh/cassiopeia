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
  });

  return (
    <div className="layout">
      <Meta />

      <Header 
        navRef={navRef} closeNavRef={closeNavRef} openNavRef={openNavRef}
        searchRef={searchRef}
        cartRef={cartRef} openCartRef={openCartRef} closeCartRef={closeCartRef}
        orderCartRef={orderCartRef}
      />

      <ModalContainer 
        cartRef={cartRef} openCartRef={openCartRef} closeCartRef={closeCartRef}
        orderCartRef={orderCartRef}
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
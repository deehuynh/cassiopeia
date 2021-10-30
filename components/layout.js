//import hooks
import { useRef } from "react"
// import component
import Meta from "./meta"
import Header from "./header"
import Nav from "./navigation"
import ModalContainer from "./modal-container"
import MobileSearch from "./mobile-search"
import Footer from "./footer"

export default function Layout ({ children }) {
  // global ref containers
  const searchRef = useRef(null);
  const navRef = useRef(null);
  const cartRef = useRef(null);
  const openNavRef = useRef(null);
  const closeNavRef = useRef(null);

  return (
    <div className="layout">
      <Meta />

      <Header 
        navRef={navRef} closeNavRef={closeNavRef} openNavRef={openNavRef}
        searchRef={searchRef}
        cartRef={cartRef} 
      />

      <ModalContainer 
        cartRef={cartRef} 
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
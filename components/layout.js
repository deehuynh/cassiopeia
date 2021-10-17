//import hooks
import { useRef } from "react"

// import component
import Meta from "./meta"
import Header from "./header"
import Nav from "./navigation"
import MobileSearch from "./mobile-search"
import Footer from "./footer"

export default function Layout ({ children }) {
  const searchRef = useRef(null);
  const navRef = useRef(null);

  return (
    <div className="layout">
      <Meta />
      <Header navRef={navRef} searchRef={searchRef} />
      <Nav navRef={navRef} />
      <MobileSearch searchRef={searchRef} />

      {children}

      <Footer />
    </div>
  )
}
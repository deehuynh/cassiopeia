import Meta from "./meta"
import Header from "./header"
import Nav from "./navigation"
import MobileSearch from "./mobile-search"
import Footer from "./footer"

export default function Layout ({ children }) {
  return (
    <div className="layout">
      <Meta />
      <Header />
      <Nav />
      <MobileSearch />

      {children}

      <Footer />
    </div>
  )
}
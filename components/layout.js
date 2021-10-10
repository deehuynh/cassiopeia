import Meta from "./meta"
import Header from "./header"
import Nav from "./navigation"
import Footer from "./footer"

export default function Layout ({ children }) {
  return (
    <div className="layout">
      <Meta />
      <Header />
      <Nav />

      {children}

      <Footer />
    </div>
  )
}
import Meta from "./meta"
import Header from "./header"

export default function Layout ({ children }) {
  return (
    <div className="layout">
      <Meta />
      <Header />
      
      {children}
    </div>
  )
}
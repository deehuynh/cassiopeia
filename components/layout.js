import Meta from "./meta"

export default function Layout ({ children }) {
  return (
    <div className="layout">
      <Meta />
      {children}
    </div>
  )
}
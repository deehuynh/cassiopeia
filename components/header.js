import Image from "next/image"

export default function Header () {
  return (
    <header className="header">
      <div className="header__location"></div>
      <div className="header__logo">
        <img src="/svgs/logo.svg" alt="Logo" />
      </div>
      <div className="header__group">
        <div className="header__search"></div>
        <div className="header__cart"></div>
      </div>
    </header>
  )
}
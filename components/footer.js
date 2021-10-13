import Link from "next/link"

function Tab ({children}) {
  return (
    <span>
      <Link href='/'>
        <a>{children}</a>
      </Link>
    </span>
  )
}

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row-1">
          <div className="footer__col-1">
            <p>Follow us</p>

            <span>+00 0000 0000</span>
          </div>

          <div className="footer__col-2">
            <div className="footer__link">
              <p></p>
            </div>

            <div className="footer__link">
              <p></p>
            </div>

            <div className="footer__link">
              <p></p>
            </div>
          </div>
        </div>
        
        <div className="footer__row-2"></div>
      </div>
    </footer>
  )
}
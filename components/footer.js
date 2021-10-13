import Link from "next/link"

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row-1">
          <div className="footer__col-1"></div>

          <div className="footer__col-2">
            <div className="footer__link">
              <p></p>

              <span>
                <Link href='/'>
                  <a></a>
                </Link>
              </span>
            </div>
          </div>
        </div>
        
        <div className="footer__row-2"></div>
      </div>
    </footer>
  )
}
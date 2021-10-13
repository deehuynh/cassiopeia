import Link from "next/link"

const socialMedia = [
  {name: 'instagram', url: 'https://www.instagram.com', image: '/svgs/instagram.svg'},
  {name: 'whatsapp', url: 'https://www.whatsapp.com', image: '/svgs/whatsapp.svg'},
  {name: 'facebook', url: 'https://www.facebook.com', image: '/svgs/instagram.svg'},
];

function Tab ({children}) {
  return (
    <span>
      <Link href='/'>
        <a>{children}</a>
      </Link>
    </span>
  )
}

function MediaLink (props) {
  return (
    <a href={props.url}>
      <img src={props.image} alt={props.name} />
    </a>
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
            <div className="footer__media">
              <MediaLink />
              <MediaLink />
              <MediaLink />
            </div>
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
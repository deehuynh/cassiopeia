import Link from "next/link"

const socialMedia = [
  {name: 'instagram', url: 'https://www.instagram.com', image: '/svgs/instagram.svg'},
  {name: 'whatsapp', url: 'https://www.whatsapp.com', image: '/svgs/whatsapp.svg'},
  {name: 'facebook', url: 'https://www.facebook.com', image: '/svgs/facebook.svg'},
];

const helpAPI = [
  {title: 'Contact us', url: '/contact-us'},
  {title: 'Delivery information', url: '/delivery-information'},
  {title: 'Payment information', url: '/payment-information'},
  {title: 'Customer service', url: '/customer-service'},
  {title: 'FAQ', url: '/faq'}
];

function Tab (props) {
  return (
    <span>
      <Link href={props.url}>
        <a>{props.title}</a>
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
  const mediaList = [];
  socialMedia.forEach((item, index) => {
    mediaList.push(
      <MediaLink key={index} name={item.name} url={item.url} image={item.image} />
    );
  });

  const helpList = [];
  helpAPI.forEach((item, index) => {
    helpList.push(
      <Tab key={index} title={item.title} url={item.url} />
    );
  });

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row-1">
          <div className="footer__col-1">
            <p>Follow us</p>
            <span>+00 0000 0000</span>
            <div className="footer__media">
              {mediaList}
            </div>
          </div>

          <div className="footer__col-2">
            <div className="footer__link">
              <p>Help</p>

              {helpList}
            </div>

            <div className="footer__link">
              <p></p>
            </div>

            <div className="footer__link">
              <p></p>
            </div>
          </div>
        </div>
        
        <div className="footer__row-2">
          &copy; Copyright,  2020
        </div>
      </div>
    </footer>
  )
}
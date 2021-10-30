import Link from "next/link"
import { useRouter } from "next/router";
import preventBodyScroll from "../function/preventBodyScroll";

const elements = [
  {name: 'Flowers', url: '/flowers'},
  {name: 'Plants', url: '/plants'},
  {name: 'Gifts', url: '/gifts'},
  {name: 'Disconts', url: '/disconts'},
  {name: 'About us', url: '/about-us'}
];

export default function Nav (props) {
  const router = useRouter();
  const tabs = [];
  elements.forEach((item, index) => {
    const activeClassName = router.pathname === item.url ? ' nav__tab--active' : '';
    tabs.push(
      <Link key={index} href={item.url}>
        <a 
          onClick={
            () => {
              props.navRef.current.className = "nav nav--hiden";
              props.closeNavRef.current.className = "hiden";
              props.openNavRef.current.className = "show";
              preventBodyScroll(false);
            }
          } 
          className={`nav__tab` + activeClassName}
        >{item.name}</a>
      </Link>
    );
  });
  
  return (
    <nav ref={props.navRef} className="nav nav--hiden">
      {tabs}

      <div className="nav__location">
        <img src="/svgs/location.svg" alt="location icon" />
        <span>Vietnam</span>
      </div>
    </nav>
  )
}
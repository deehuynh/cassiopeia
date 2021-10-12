import Link from "next/link"

const elements = [
  {name: 'Flowers', url: '/flowers'},
  {name: 'Plants', url: '/plants'},
  {name: 'Gifts', url: '/gifts'},
  {name: 'Disconts', url: '/disconts'},
  {name: 'About us', url: '/about-us'}
];

export default function Nav () {
  const tabs = [];
  elements.forEach((item, index) => {
    tabs.push(
      <Link key={index} href={item.url}>
        <a>{item.name}</a>
      </Link>
    );
  });
  return (
    <nav className="nav">
      {tabs}
    </nav>
  )
}
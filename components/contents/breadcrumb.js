// next api
import Link from "next/link"
import { useRouter } from "next/router"

export default function BreadCrumb (props) {
  // tab name passed from detail page
  const detailTab = props.detailTab ? props.detailTab : 'details';
  // tabs
  const tabs = [<Tab key={0} url='/' tabName='Home' />];
  // access router object
  const router = useRouter();
  // path link
  const pathlink = router.pathname;
  // query param
  const queryParam = router.query;
  // name of path link
  const names = [
    {name: 'Flowers', path: 'flowers'},
    {name: 'Plants', path: 'plants'},
    {name: 'Gifts', path: 'gifts'},
    {name: 'About us', path: 'about-us'},
    {name: 'Checkout', path: 'checkout'},
  ];
  // comparing pathname
  names.forEach((item)=>{
    if (`/` + item.path === pathlink) {
      tabs.push(
        <Tab key={1} url={pathlink} tabName={item.name} />
      );
    }

    // page detail's path name
    if (queryParam.page && queryParam.page === item.path) {
      tabs.push(
        <Tab key={1} url={`/` + queryParam.page} tabName={item.name} />,
        <Tab key={2} url={`/` + queryParam.page + '/' + queryParam.detail} tabName={detailTab} />
      );
    }
  });

  return (
    <div className="breadcrumb">
      {tabs}
    </div>
  )
}

function Tab (props) {
  return (
    <Link href={props.url}>
      <a className="breadcrumb__tab">
        {props.tabName}
      </a>
    </Link>
  )
}
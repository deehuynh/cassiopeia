// next api
import Link from "next/link"

export default function BreadCrumb (props) {
  const tabName = props.tabName;
  return (
    <div className="breadcrumb">
      <Tab url='/' tabName='Home' />
      <Tab url={tabName.url} tabName={tabName.name} />
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
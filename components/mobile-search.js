export default function MobileSearch (props) {
  return (
    <div ref={props.searchRef} className="m-search__hiden">
      <input type="text" defaultValue='' placeholder='Search' />
    </div>
  )
}
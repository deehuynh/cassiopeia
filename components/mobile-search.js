import useSearch from "../hooks/useSearch"

export default function MobileSearch (props) {
  const {searchValue, handleOnChangeValue} = useSearch()

  return (
    <div ref={props.searchRef} className="m-search__hiden">
      <input
        type="text" placeholder='Search' 
        value={searchValue}
        onChange={handleOnChangeValue}
      />
    </div>
  )
}
import useSearch from "../hooks/useSearch"

export default function SearchInput ({searchRef}) {
  const {searchValue, handleOnChangeValue} = useSearch()

  return (
    <input
      ref={searchRef}
      className='header__search--hiden'
      type="text" placeholder='Search' 
      value={searchValue}
      onChange={handleOnChangeValue}
    />
  )
}
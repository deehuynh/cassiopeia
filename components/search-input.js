// hooks
import useSearch from "../hooks/useSearch"
// redux toolkit
import { useDispatch, useSelector } from "react-redux"
import { setValue } from "../redux/searchSlice"

export default function SearchInput ({searchRef}) {
  // const {searchValue, handleOnChangeValue} = useSearch()
  // redux dispatch
  const dispatch = useDispatch()
  // get search value
  const searchValue = useSelector(state => state.search.value)
  // handle on change value
  const handleOnChangeValue = ({target: {value}}) => dispatch(
    setValue(value)
  )

  return (
    <input
      ref={searchRef}
      className='header__search--hiden'
      type="text" placeholder='Search' 
      value={searchValue}
      onChange={handleOnChangeValue}
      spellCheck={false}
    />
  )
}
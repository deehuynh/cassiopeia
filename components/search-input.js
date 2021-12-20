// react api
import { useRef } from "react"
// hooks
import useSearch from "../hooks/useSearch"
// redux toolkit
import { useDispatch, useSelector } from "react-redux"
import { setValue, setSearchKey } from "../redux/searchSlice"

export default function SearchInput ({searchRef}) {
  // const {searchValue, handleOnChangeValue} = useSearch()
  // the value will be persisted on every render by useRef
  const typingTimeout = useRef(null)
  // redux dispatch
  const dispatch = useDispatch()
  // get search value
  const searchValue = useSelector(state => state.search.value)
  // handle on change value
  const handleOnChangeValue = ({target: {value}}) => {
    // set value
    dispatch(setValue(value));
    // is typing, reset time to 0
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current)
    }
    // submit after already typing
    typingTimeout.current = setTimeout(() => {
      dispatch(setSearchKey(value))
    }, 500)
  }

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
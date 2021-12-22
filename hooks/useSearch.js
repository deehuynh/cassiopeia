// react api
import { useState, useEffect, useRef } from "react"
// api function
import getAllProducts from "../api/getAllProducts"
// redux
import { useDispatch, useSelector } from "react-redux"
import { getItems, setValue, setSearchKey } from "../redux/searchSlice"
// functions
import preventBodyScroll from "../function/preventBodyScroll"

function useSearch () {
  // merge items to an array
  const [allProducts, setAllProducts] = useState(null)
  // end products
  const searchedItems = []
  // the value will be persisted on every render by useRef
  const typingTimeout = useRef(null)
  // redux dispatch
  const dispatch = useDispatch()
  // get search value
  const searchValue = useSelector(state => state.search.value)
  // get searchKey
  const searchKey = useSelector(state => state.search.searchKey)
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
      /*  prevent body scroll on mobile  */
      // ideas: search-modal prevents body sroll if searchedItems === []
      // if user removes search text in input === '' then body scroll is available
      // if user clicks search button at header component then body scroll is available
      if (value === '') {
        preventBodyScroll(false)
      }
    }, 500)
  }

  useEffect(() => {
    async function fetchAPI () {
      const url = 'https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/.json'
      const res = await fetch(url)
      const data = await res.json()
      
      setAllProducts(getAllProducts(data))
    }

    fetchAPI()
  }, [])

  if (allProducts) {
    let searchKeyLength = searchKey.length

    allProducts.forEach((item) => {
      // get length of name equal to lenght of searchKey
      let slicedName = item.name.slice(0, searchKeyLength)
      // condition: searchKey === name of item
      let compareItem = slicedName.toLowerCase() === searchKey.toLowerCase()

      if ((searchKeyLength > 0) && (compareItem)) {
        searchedItems.push(item)
      }
    })
  }

  // store searchedItems to redux
  useEffect(() => {
    dispatch(getItems(searchedItems))
  }, [dispatch, searchedItems])

  return {searchValue, handleOnChangeValue}
}

export default useSearch
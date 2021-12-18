// react api
import { useState, useEffect, useRef } from "react"
// api function
import getAllProducts from "../api/getAllProducts"
// redux
import { useDispatch } from "react-redux"
import { getItems } from "../redux/searchSlice"

function useSearch () {
  // search value state
  const [searchValue, setSearchValue] = useState('')
  // Unlike searchValue, searchKey is used for submit function
  const [searchKey, setSearchKey] = useState('')
  // the value will be persisted on every render by useRef
  const typingTimeout = useRef(null)
  // merge items to an array
  const [allProducts, setAllProducts] = useState(null)
  // end products
  const searchedItems = []

  // redux dispatch
  const dispatch = useDispatch()

  // handle onChange value
  const handleOnChangeValue = (e) => {
    setSearchValue(e.target.value)

    // is typing, reset time to 0
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current)
    }

    // submit after already typing
    typingTimeout.current = setTimeout(() => {
      setSearchKey(e.target.value)
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
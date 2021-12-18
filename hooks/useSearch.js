import { useState, useEffect, useRef } from "react"

function useSearch () {
  // search value state
  const [searchValue, setSearchValue] = useState('')
  // Unlike searchValue, searchKey is used for submit function
  const [searchKey, setSearchKey] = useState('')
  // the value will be persisted on every render by useRef
  const typingTimeout = useRef(null)
  // all data state
  const [data, setData] = useState(null)
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
      
      setData(data)
    }

    fetchAPI()
  }, [])

  if (data) {
    console.log(data)
    console.log(searchKey.length)
  }

  return [searchValue, handleOnChangeValue]
}

export default useSearch
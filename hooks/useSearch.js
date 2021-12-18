import { useState, useEffect } from "react"

function useSearch () {
  // search value state
  const [searchState, setSearchState] = useState('')
  // all data state
  const [data, setData] = useState(null)
  // handle onChange value
  const handleOnChangeValue = (e) => {
    setSearchState(e.target.value)
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

  return [searchState, handleOnChangeValue]
}

export default useSearch
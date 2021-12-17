import { useState, useEffect } from "react"

function useSearch () {
  // search state
  const [searchState, setSearchState] = useState('')
  // handle onChange value
  const handleOnChangeValue = (e) => {
    setSearchState(e.target.value)
  }

  return [searchState, handleOnChangeValue]
}

export default useSearch
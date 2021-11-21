// react api
import { useEffect, useState } from "react"
// firebase
import { database } from "../firebase"
import { ref } from "firebase/database"

function useGetData () {
  // product list state
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    
  })

  return productsArray;
}
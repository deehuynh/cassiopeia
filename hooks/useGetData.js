// react api
import { useEffect, useState } from "react"
// firebase
import { dbRef } from "../firebase"
import { ref, get, child } from "firebase/database"

function useGetData () {
  // product list state
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    get(child(dbRef, primaryKey)).then((snapshot) => {
      
    }).catch();
  })

  return productsArray;
}
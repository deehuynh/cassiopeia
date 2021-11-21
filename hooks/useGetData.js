// react api
import { useEffect, useState } from "react"
// firebase
import { database } from "../firebase"
import { ref, get, child } from "firebase/database"

function useGetData () {
  // product list state
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);

    get().then().catch();
  })

  return productsArray;
}
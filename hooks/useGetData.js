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
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch();
  })

  return productsArray;
}
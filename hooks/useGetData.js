// react api
import { useEffect, useState } from "react"
// firebase
import { dbRef } from "../firebase"
import { get, child } from "firebase/database"

function useGetData (primaryKey) {
  // product list state
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    get(child(dbRef, primaryKey)).then((snapshot) => {
      if (snapshot.exists()) {
        const tmpStorage = [];
        snapshot.forEach((item) => {
          tmpStorage.push(item.val());
        });
        setProductsArray(tmpStorage);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
        console.error(error);
    });
  }, [primaryKey])

  return productsArray;
}

export default useGetData;
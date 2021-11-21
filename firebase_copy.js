import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  // the firebase.js file was hidden by .gitinore. Here is the copied file for github source code
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}

const app = initializeApp(firebaseConfig)
let isWindow = false

if (typeof window !== "undefined") {
  isWindow = true
}

export const analytics = isWindow === true ? getAnalytics(app) : null

export const database = isWindow === true ? getDatabase(app) : null
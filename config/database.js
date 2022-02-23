import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'

let app

if (!getApps.length) {
  app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: "eccomerce-191fc.appspot.com",
    messagingSenderId: "405544233558",
    appId: "1:405544233558:web:2f3652c68cb270bd0d29f7",
    measurementId: "G-RXZ2EVBSHR"
  })
} else {
  app = getApp()
}

const db = getFirestore(app)
const auth = getAuth(app)

export { db }
export { auth }




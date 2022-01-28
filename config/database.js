import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "eccomerce-191fc.firebaseapp.com",
  projectId: "eccomerce-191fc",
  storageBucket: "eccomerce-191fc.appspot.com",
  messagingSenderId: "405544233558",
  appId: `${process.env.APP_ID}`,
  measurementId: `${process.env.MEASUREMENT_ID}`
}

const app = initializeApp(firebaseConfig)

export default app
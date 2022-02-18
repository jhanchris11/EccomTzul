import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDS1M3N7jFuqmR3kry6HFDSn5TlHggagw",
  authDomain: "eccomerce-191fc.firebaseapp.com",
  projectId: "eccomerce-191fc",
  storageBucket: "eccomerce-191fc.appspot.com",
  messagingSenderId: "405544233558",
  appId: "1:405544233558:web:2f3652c68cb270bd0d29f7",
  measurementId: "G-RXZ2EVBSHR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
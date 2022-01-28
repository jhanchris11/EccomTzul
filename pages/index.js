import { useEffect, useState } from "react"
import { db } from "../config/database"
import { collection, getDocs } from 'firebase/firestore'

export default function Home() {
  const [products, setProducts] = useState([])
  const productsCollection = collection(db, 'productos')
  
  useEffect(() => {

    const getProducts = async () => {
      const data = await getDocs(productsCollection)
      setProducts(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }

    getProducts()
  }, [])

  return (
    <div>
      {products.map(product => <h1 key={product.id}>{product.name}</h1>)}
    </div>
  )
}

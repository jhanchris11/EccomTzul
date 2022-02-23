import { db } from "../../../config/database"
import { collection, getDocs } from 'firebase/firestore'

export default async function products(req,res) {
    const productsCollection = collection(db, 'productos')
    const snapshot = await getDocs(productsCollection)

    const products = []
    snapshot.forEach(doc => {
      products.push({ id: doc.id, ...doc.data() })  
    })

    return res.status(200).json(products)
}
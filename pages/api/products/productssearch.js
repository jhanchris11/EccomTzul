import { db } from '../../../config/database'
import { collection, getDocs, query, where } from 'firebase/firestore'

export default async function productssearch(req, res) {
  const { search } = req.query

  const productsCollection = collection(db, 'productos')
  let snapshot
  if (search) {
    console.log('col', productsCollection)
    const consultation = query(productsCollection, where('tags', 'array-contains', search))
    snapshot = await getDocs(consultation)
  } else {
    const consultation = query(productsCollection)
    snapshot = await getDocs(consultation)
  }

  if (snapshot.empty) {
    return res.status(404).json({ message: 'producto no encontrado' })
  }

  const products = []
  snapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() })
  })

  return res.status(200).json(products)
}

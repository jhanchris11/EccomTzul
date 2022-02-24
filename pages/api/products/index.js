import { database } from '../../../database'
import { collection, query, getDocs } from 'firebase/firestore'

export default async function productos(req, res) {
  // Consulta de información
  const consulta = query(collection(database, 'productos'))
  const snapshot = await getDocs(consulta)
  if (snapshot.empty) {
    return res.status(404).json({ message: 'No se encontraron documentos' })
  }
  console.log(snapshot)
  const productos = []
  snapshot.forEach((doc) => {
    productos.push({ id: doc.id, ...doc.data() })
  })

  return res.status(200).json(productos)
  // return res.status(200).json([
  //     {id:1,nombre:"Producto 1",descripcion:"Mi primer producto"},
  //     {id:2,nombre:"Producto 2",descripcion:"Mi segundo producto"},
  // ])
}

import { database } from '../../../database'
import { collection, query, getDocs, where } from 'firebase/firestore'

export default async function filter(req, res) {
  const { popular } = req.query
  const col = collection(database, 'productos')
  let snapshot
  if (popular) {
    const consulta = query(col, where('popular', '==', true))
    snapshot = await getDocs(consulta)
  } else {
    const consulta = query(col)
    snapshot = await getDocs(consulta)
  }
  if (snapshot.empty) {
    return res.status(404).json({ msg: 'Not documents' })
  }
  const producs = []
  snapshot.forEach((doc) => {
    producs.push({ id: doc.id, ...doc.data() })
  })
  return res.status(200).json(producs)
}

import { db } from '../../../config/database'
import { doc, setDoc } from 'firebase/firestore'

export default async function saveCart({body, method},res) {
    if (method === 'POST') {
        await setDoc(doc(db, 'carro', body.username), body.data)
        await setDoc(doc(db, 'ordenActual', body.username), body.price)

        return res.json({ success: true })
    }
}
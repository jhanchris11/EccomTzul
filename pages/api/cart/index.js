import db from '../../../config/database'
import { doc, updateDoc } from 'firebase/firestore'

export default async function saveCart({body, method},res) {
    if (method === 'POST') {
        const cartDoc = doc(db, 'cart', body.username)
        await updateDoc(cartDoc, body.data)
        console.log(body.data)

        return res.json({ success: true })
    }
}
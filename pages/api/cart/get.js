import db from '../../../config/database'
import { doc, getDoc } from 'firebase/firestore'

export default async function getCart({body}, res) {
    const cartDoc = doc(db, 'cart', body.username)
    await getDoc(cartDoc)

    return res.json(snapshot.data())
}
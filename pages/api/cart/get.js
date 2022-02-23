import { db } from '../../../config/database'
import { doc, getDoc } from 'firebase/firestore'

export default async function getCart({body}, res) {
    const cartProducts = await getDoc(doc(db, 'carro', body.username))
    const currentPayment = await getDoc(doc(db, 'ordenActual', body.username))

    return res.json({
        cartProducts: cartProducts.data(),
        currentPayment: currentPayment.data(),
    })
}
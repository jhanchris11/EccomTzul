import db from "../../../config/database"
import { collection, getDoc, doc, query } from 'firebase/firestore'

export default async function product(req,res) {
    const {item} = req.query;
    console.log(item)
    // const productsCollection = collection(db, 'productos', item)
    const snapshot = await getDoc(doc(db,'productos',item))

    return res.status(200).json(snapshot.data());
}
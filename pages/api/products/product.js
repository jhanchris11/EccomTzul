import { db } from "../../../config/database"
import { getDoc, doc } from 'firebase/firestore'

export default async function product(req,res) {
    const {item} = req.query;
    console.log(item)

    const snapshot = await getDoc(doc(db,'productos',item))

    return res.status(200).json(snapshot.data());
}
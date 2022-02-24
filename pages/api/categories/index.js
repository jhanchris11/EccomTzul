import { db } from "../../../config/database";
import { collection, getDocs } from 'firebase/firestore';

export default async function categories(req ,res){
    const categoriesCollection = collection(db, 'categorias');
    const snapshot = await getDocs(categoriesCollection);
    
    const categories = [];
    snapshot.forEach(doc => {
      categories.push({ id: doc.id, ...doc.data() });  
    })

    return res.status(200).json(categories);
}
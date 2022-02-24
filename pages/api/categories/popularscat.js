import { db } from "../../../config/database";
import { collection, getDocs, query, where } from 'firebase/firestore';

export default async function popularcategories(req ,res){
    const {popular} = req.query;

    const categoriesCollection = collection(db, 'categorias');
    let snapshot;
    if(popular){
        const consultation = query(categoriesCollection, where('popular','==', true));
        snapshot = await getDocs(consultation);
    }else{
        const consultation = query(categoriesCollection);
        snapshot = await getDocs(consultation);
    }
    
    if(snapshot.empty){
        return res.status(404).json({message:"categorias no encontradas"});
    }
    
    const categories = [];
    snapshot.forEach(doc => {
      categories.push({ id: doc.id, ...doc.data() });  
    })

    return res.status(200).json(categories);
}
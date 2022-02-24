import { db } from "../../../config/database";
import { collection, getDocs, query, where } from 'firebase/firestore';

export default async function productsbycategory(req ,res){
    const {category} = req.query;

    const productsCollection = collection(db, 'productos');
    let snapshot;
    if(category){
        const consultation = query(productsCollection, where('category','==', category));
        snapshot = await getDocs(consultation);
    }else{
        const consultation = query(productsCollection);
        snapshot = await getDocs(consultation);
    }
    
    if(snapshot.empty){
        return res.status(404).json({message:"productos no encontrados"});
    }
    
    const products = [];
    snapshot.forEach(doc => {
      products.push({ id: doc.id, ...doc.data() });  
    })

    return res.status(200).json(products);
}
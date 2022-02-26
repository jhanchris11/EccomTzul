import { db } from "../../../config/database";
import { collection, getDocs, query, where } from 'firebase/firestore';

export default async function popularproducts(req ,res){
    const {popular} = req.query;

    const productsCollection = collection(db, 'productos');
    let snapshot;
    if(popular){
        const consultation = query(productsCollection, where('popular','==', true));
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
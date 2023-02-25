import app from "./app.js";
import { getFirestore,collection, addDoc, getDocs} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

export async function subscribeToHellFireClub(subscription){
    const db = getFirestore(app)
    const hellfireClubCollecction = collection(db,'hellfire-club')
    const docRef = await addDoc(hellfireClubCollecction, subscription)
    return docRef.id
};
export async function getHellfireClubSubscriptions() {  
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection)
    const subscriptions = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import firebase from './firebase';

export default async function saveToFirebase(book) {
  const db = getFirestore(firebase);
  // Add a new document in collection "cities"
  await setDoc(doc(db, 'books'), book);
}
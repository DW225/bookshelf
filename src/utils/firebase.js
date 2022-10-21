import { initializeApp } from 'firebase/app';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from '../constant/config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export function firebase() {
  return initializeApp(firebaseConfig)
};

export function appCheck(app) {
  return initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LehejgiAAAAAC1T8Klt1XffvfQfo05X3VRrKBED'),
    isTokenAutoRefreshEnabled: true,
  })
}

export function analytics(app) { return getAnalytics(app); }

export async function storeBook(book) {
  const db = getFirestore(firebase);
  // Add a new document in collection "cities"
  await setDoc(doc(db, 'books'), book);
}


import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../constant/config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export default function firebase () {
  return initializeApp(firebaseConfig)
};


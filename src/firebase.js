import { initializeApp } from "firebase/app";
import {getFirestore,serverTimestamp} from "firebase/firestore"


const firebaseConfig = {
   
  };

const app =initializeApp(firebaseConfig)
const db =getFirestore();
const timestamp =serverTimestamp();

export{app,db,timestamp}

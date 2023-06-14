import { initializeApp } from "firebase/app";
import {getFirestore,serverTimestamp} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAHAgank5Fh8W5NaevY_FLubuDgLIHHFRQ",
    authDomain: "my-app-f2550.firebaseapp.com",
    projectId: "my-app-f2550",
    storageBucket: "my-app-f2550.appspot.com",
    messagingSenderId: "898749492161",
    databaseURL: "https://my-app-f2550-default-rtdb.firebaseio.com/",
    appId: "1:898749492161:web:676e74631cfbefe2af1d40"
  };

const app =initializeApp(firebaseConfig)
const db =getFirestore();
const timestamp =serverTimestamp();

export{app,db,timestamp}
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database" 
import { getFirestore, collection } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCh2jvb0ttUJJaWI1-_8DZ-0DAeJJK90Jk",
  authDomain: "website-sabrinabm94.firebaseapp.com",
  databaseURL: "https://website-sabrinabm94-default-rtdb.firebaseio.com",
  projectId: "website-sabrinabm94",
  storageBucket: "website-sabrinabm94.appspot.com",
  messagingSenderId: "769442502027",
  appId: "1:769442502027:web:0dc4187928005e09438b8e",
  measurementId: "G-97FEKHF5GF"
};

let app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const fireStore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, fireStore, storage, auth, collection };

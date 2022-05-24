import { initializeApp, getApp } from "firebase/app";
import { getDatabase, ref as databaseRef, onValue, child, get, setxs } from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage, ref as storageRef } from 'firebase/storage';
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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, auth, databaseRef, storageRef, onValue, child, get, collection, getDocs };

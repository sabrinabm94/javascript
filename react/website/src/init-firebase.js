import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

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

export const db = getDatabase(app);
export const fireStore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
//export { db, fireStore, storage, auth, collection };
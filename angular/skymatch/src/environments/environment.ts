import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

//init of firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyC-u02BsbwABx3pVdIVSrAyp9nSq_3PhPQ',
  authDomain: 'sky-match-sabrinabm94.firebaseapp.com',
  projectId: 'sky-match-sabrinabm94',
  storageBucket: 'sky-match-sabrinabm94.appspot.com',
  messagingSenderId: '65213291517',
  appId: '1:65213291517:web:68c597fa8dd723aa799794',
  measurementId: 'G-FMBL1Q6E17',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//end of firebase config

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4000',
};

const Rebase = require('re-base');
const Firebase = require('firebase');

const Firebaseconfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: 
  };
  
  // Initialize Firebase
  const app = Firebase.initializeApp(Firebaseconfig);
  const Config = Rebase.createClass(app.database());
  const analytics = Firebase.getAnalytics(app);

  export default Config;
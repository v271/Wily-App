import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDAo8SejcI91Nqyzf1OmrpIxPIf_Qyf0A8",
  authDomain: "wily-app-7f600.firebaseapp.com",
  projectId: "wily-app-7f600",
  storageBucket: "wily-app-7f600.appspot.com",
  messagingSenderId: "913174195928",
  appId: "1:913174195928:web:692dda319a6a754501f1ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

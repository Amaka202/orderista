import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';


 // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyDHtk8_efGfNiBiq4kAlANJZ_lOh_cFuso",
    authDomain: "orderista-pwa.firebaseapp.com",
    databaseURL: "https://orderista-pwa.firebaseio.com",
    projectId: "orderista-pwa",
    storageBucket: "orderista-pwa.appspot.com",
    messagingSenderId: "261772318032",
    appId: "1:261772318032:web:8e3c0008b8b8252d224855"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});
  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const storage = firebase.storage().ref();
export default firebase;


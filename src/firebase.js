import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';


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
  const db = firebase.firestore();
  const auth = firebase.auth();

    const provider = new firebase.auth.GoogleAuthProvider();
  
    export const signInWithGoogle = () => {
        auth.signInWithPopup(provider);
      };

  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = db.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName } = user;
      try {
        await userRef.set({
          displayName,
          email,
          ...additionalData
        });
        console.log('user added successfully');
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };

  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await db.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };


// const storage = firebase.storage();

export { db, auth };


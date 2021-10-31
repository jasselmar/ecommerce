import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDf8wmsXjJ1LTLma6skj4tKmnRGt7U1I7U",
    authDomain: "ecommerce-14cbf.firebaseapp.com",
    projectId: "ecommerce-14cbf",
    storageBucket: "ecommerce-14cbf.appspot.com",
    messagingSenderId: "293256208527",
    appId: "1:293256208527:web:3f3b408306e6ae386f90fa"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
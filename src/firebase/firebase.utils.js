import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDm2PjD9s12HlxsUIt7CNV6EWGvSChw-CY",
    authDomain: "ecommerce-db-d7118.firebaseapp.com",
    databaseURL: "https://ecommerce-db-d7118.firebaseio.com",
    projectId: "ecommerce-db-d7118",
    storageBucket: "ecommerce-db-d7118.appspot.com",
    messagingSenderId: "256614045873",
    appId: "1:256614045873:web:26e1a9afb1416c655bea90",
    measurementId: "G-FXYWRM6YSF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  //triggers Google pop-up
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  //many types but we only want Google Sign In

  export default firebase;
import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyCaPCa7QOYW0H1vOLA1Au-3qx6Fl7WalOU",
  authDomain: "panier-achats-bdb.firebaseapp.com",
  projectId: "panier-achats-bdb",
  storageBucket: "panier-achats-bdb.appspot.com",
  messagingSenderId: "670733747915",
  appId: "1:670733747915:web:b02f2d5f46855198a2bd4e",
  measurementId: "G-20V60D493Q"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();

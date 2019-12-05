import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC_dMz1-HoE8U9cD4WCotZ34CibmZHSsJ8',
  authDomain: 'poshmi-db.firebaseapp.com',
  databaseURL: 'https://poshmi-db.firebaseio.com',
  projectId: 'poshmi-db',
  storageBucket: 'poshmi-db.appspot.com',
  messagingSenderId: '939514392017',
  appId: '1:939514392017:web:5db396b6e27eab1344c4f0',
  measurementId: 'G-QG1D2V62YP',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

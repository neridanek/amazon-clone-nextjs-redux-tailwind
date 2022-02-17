import { initializeApp } from 'firebase/app';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCq0qo0SQ23mf8UmGdhVi6NfuCEkAial1U',
  authDomain: 'clone-2-48ddf.firebaseapp.com',
  projectId: 'clone-2-48ddf',
  storageBucket: 'clone-2-48ddf.appspot.com',
  messagingSenderId: '378208719137',
  appId: '1:378208719137:web:dde905b48f5ad94212ae60',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

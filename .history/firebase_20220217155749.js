import { initializeApp } from 'firebase/app';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCbUCZ1QmkH07fxz-LyPU7Lfxe2606FGyA',
  authDomain: 'clone-6e851.firebaseapp.com',
  projectId: 'clone-6e851',
  storageBucket: 'clone-6e851.appspot.com',
  messagingSenderId: '630426074700',
  appId: '1:630426074700:web:7bebce86a368d0100a3ee9',
};

const app = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

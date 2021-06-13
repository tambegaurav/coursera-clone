import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC3-LklaX6Ec5nKoUexQFwc-0d-jlyeylA',
  authDomain: 'coursera-98a45.firebaseapp.com',
  projectId: 'coursera-98a45',
  storageBucket: 'coursera-98a45.appspot.com',
  messagingSenderId: '817493116965',
  appId: '1:817493116965:web:4a8850f84d74b2b5b157cc',
};

const app = firebase.initializeApp(firebaseConfig);

export const storage = app.storage();

export default app;

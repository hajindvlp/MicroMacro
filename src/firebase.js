import { createContext } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

class Firebase {
  constructor() {
    if(!firebase.apps.length)
      firebase.initializeApp({
        apiKey: process.env.REACT_APP_APIKEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        databaseURL: process.env.REACT_APP_DATABASEURL,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_APPID,
      });

    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
    this.analytics = firebase.analytics();
  }
}

const firebaseContext = createContext(null);

export default Firebase;
export { firebaseContext };
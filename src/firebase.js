import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "clone-fbf3d.firebaseapp.com",
    projectId: "clone-fbf3d",
    storageBucket: "clone-fbf3d.appspot.com",
    messagingSenderId: "184695033949",
    appId: "1:184695033949:web:bfbd9c27962a4623253db4",
    measurementId: "G-VVP2RPQY28"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
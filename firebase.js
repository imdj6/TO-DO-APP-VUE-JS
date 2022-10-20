import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCw1XMTr1sWyC4iWM64ehk_lLfK6GDVg8Q",
    authDomain: "todoapp-d790f.firebaseapp.com",
    projectId: "todoapp-d790f",
    storageBucket: "todoapp-d790f.appspot.com",
    messagingSenderId: "569860159154",
    appId: "1:569860159154:web:3881007f1bd31571f87bab"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();


export default db;

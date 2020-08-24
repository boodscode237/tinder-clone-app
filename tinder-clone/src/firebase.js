import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHe33Xv0ASAc7aj3qGX_EUlBPzCFsVFMg",
    authDomain: "tinder-clone-app-30286.firebaseapp.com",
    databaseURL: "https://tinder-clone-app-30286.firebaseio.com",
    projectId: "tinder-clone-app-30286",
    storageBucket: "tinder-clone-app-30286.appspot.com",
    messagingSenderId: "337805982807",
    appId: "1:337805982807:web:30ce0b970670d5f8847712",
    measurementId: "G-2TWXBKY96Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;


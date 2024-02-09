
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "clone-d9884.firebaseapp.com",
    projectId: "clone-d9884",
    storageBucket: "clone-d9884.appspot.com",
    messagingSenderId: "333950494431",
    appId: "1:333950494431:web:cdbaaa9805507bda26eb6a",
    measurementId: "G-QBE54PXDBN"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
export { app, auth, storage, db, provider };
export default db;
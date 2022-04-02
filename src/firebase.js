import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCye0gZI8yyDfoFitvkiIk6BjGCPwDZaQs",
  authDomain: "querify-83cae.firebaseapp.com",
  projectId: "querify-83cae",
  storageBucket: "querify-83cae.appspot.com",
  messagingSenderId: "578882557413",
  appId: "1:578882557413:web:9a2a0e81837f8038e04b0c",
  measurementId: "${config.measurementId}"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;

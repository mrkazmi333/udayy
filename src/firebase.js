import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,

  apiKey: "AIzaSyDFNJW0n5LE92ViVG58qL8nvt4uysI3-90",
  authDomain: "auth-development-ed961.firebaseapp.com",
  databaseURL: "https://auth-development-ed961.firebaseio.com",
  projectId: "auth-development-ed961",
  storageBucket: "auth-development-ed961.appspot.com",
  messagingSenderId: "786784284044",
  appId: "1:786784284044:web:6654360c050d6fdeda3aa9",
});

export const auth = app.auth();
export default app;

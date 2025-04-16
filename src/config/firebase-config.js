import firebase from "firebase/compat/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCqkXQ1RXsNc4h1o-crilJ4kyk-kP2sELY",
//   authDomain: "fir-experiments-16493.firebaseapp.com",
//   projectId: "fir-experiments-16493",
//   storageBucket: "fir-experiments-16493.appspot.com",
//   messagingSenderId: "646710968437",
//   appId: "1:646710968437:web:a04fd85f922b759ca0783c",
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJkGMqg8e0Mjpe-mIO9w0-kyyla6h4P_8",
  authDomain: "crowdfunding-cfc23.firebaseapp.com",
  projectId: "crowdfunding-cfc23",
  storageBucket: "crowdfunding-cfc23.firebasestorage.app",
  messagingSenderId: "1028718522953",
  appId: "1:1028718522953:web:85755dce849170e8c88598",
  measurementId: "G-QNFX52BXXN"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
// export 📦
export default app;
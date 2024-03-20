import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCSg3wf6VI_ZmYXWw8UIpZXiskHSUVrjGc",
  authDomain: "boblog-ffac1.firebaseapp.com",
  projectId: "boblog-ffac1",
  storageBucket: "boblog-ffac1.appspot.com",
  messagingSenderId: "681736316274",
  appId: "1:681736316274:web:044e3553629ce08c9c29eb",
  measurementId: "G-N1TPY9ZQE5",
};

const app = initializeApp(config);
const db = getFirestore(app);

export { app, db };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN-agpih5k-bT6edac55GtrU7-95MJAyE",
  authDomain: "linkedin-clone-8dc51.firebaseapp.com",
  projectId: "linkedin-clone-8dc51",
  storageBucket: "linkedin-clone-8dc51.appspot.com",
  messagingSenderId: "217151289935",
  appId: "1:217151289935:web:7e05faa875ee8a6da7883a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

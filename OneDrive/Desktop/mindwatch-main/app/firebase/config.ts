import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// 🔥 Configuration Firebase (copiée depuis la console)
const firebaseConfig = {
  apiKey: "AIzaSyBbFkbzEZMgFxinwJWzB1Mmg3DB0bl2aU",
  authDomain: "mindora-1b83f.firebaseapp.com",
  databaseURL: "https://mindora-1b83f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mindora-1b83f",
  storageBucket: "mindora-1b83f.firebasestorage.app",
  messagingSenderId: "362168691076",
  appId: "1:362168691076:web:bbad6254f1cab15a6f55d1",
  measurementId: "G-ST3QV7ZBPH"
};

// 🔥 Initialisation Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Initialisation Realtime Database
export const db = getDatabase(app);

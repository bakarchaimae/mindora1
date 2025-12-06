import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBk-CiP1Qf35wpUx1RXq_KZxGve58PBY8o",
  authDomain: "heartguard-cfc48.firebaseapp.com",
  databaseURL: "https://heartguard-cfc48-default-rtdb.firebaseio.com",
  projectId: "heartguard-cfc48",
  storageBucket: "heartguard-cfc48.firebasestorage.app",
  messagingSenderId: "169173920801",
  appId: "1:169173920801:web:63427b863d444f54ac8760",
  measurementId: "G-VXX3NBGFHY"
};
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChBcJETwhMT50_JB4L0g8TL3ujiRskxmA",
  authDomain: "users-1f9ea.firebaseapp.com",
  projectId: "users-1f9ea",
  storageBucket: "users-1f9ea.appspot.com",
  messagingSenderId: "1007610965092",
  appId: "1:1007610965092:web:31edd7456b9f4bff764371"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

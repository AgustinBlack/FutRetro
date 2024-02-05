import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4t1FdEjP0KJ1wuHRUEs3MtAvdnTg00Fg",
  authDomain: "futclothes-5c4e6.firebaseapp.com",
  projectId: "futclothes-5c4e6",
  storageBucket: "futclothes-5c4e6.appspot.com",
  messagingSenderId: "135019304670",
  appId: "1:135019304670:web:f986fa56cd256e46d5944f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
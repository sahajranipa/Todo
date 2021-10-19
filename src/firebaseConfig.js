import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "todo-app-f3958.firebaseapp.com",
  projectId: "todo-app-f3958",
  storageBucket: "todo-app-f3958.appspot.com",
  messagingSenderId: "64876935327",
  appId: "1:64876935327:web:a454bf4986debc9910caaa",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

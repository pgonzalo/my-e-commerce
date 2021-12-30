import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHXqi5jF0_N8RBeV7WgXvYqs0cSKocKIg",
  authDomain: "e-commerce-nativo-28c0a.firebaseapp.com",
  projectId: "e-commerce-nativo-28c0a",
  storageBucket: "e-commerce-nativo-28c0a.appspot.com",
  messagingSenderId: "853449125309",
  appId: "1:853449125309:web:e7708513133cdd364276d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
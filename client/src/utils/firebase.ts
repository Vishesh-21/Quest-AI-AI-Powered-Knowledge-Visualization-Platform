import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-quest-ai.firebaseapp.com",
  projectId: "auth-quest-ai",
  storageBucket: "auth-quest-ai.firebasestorage.app",
  messagingSenderId: "617720007092",
  appId: "1:617720007092:web:40495238fe0d437e688ae1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };

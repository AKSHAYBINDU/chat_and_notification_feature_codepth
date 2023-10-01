
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwEe7VeakGJsQHwADj5Z9NZ9kcBoXeh40",
  authDomain: "chat-app-7c111.firebaseapp.com",
  projectId: "chat-app-7c111",
  storageBucket: "chat-app-7c111.appspot.com",
  messagingSenderId: "797079267812",
  appId: "1:797079267812:web:47fcab639631021c123ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = app.auth();
const provider = new GoogleAuthProvider();

export {auth, provider}
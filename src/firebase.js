
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging"


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
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
 
const messaging = getMessaging(app)
// For initializing instant chat notification.

function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      getToken(messaging, { vapidKey: 'BLK3tbbBdkDqcKSCIu0bT6wuvG10gH6tt9HLab-NslnzUNlTehIDG4oXd6g-WHi8bWKvpupYyHkFQtdsSV1vatI',
     }).then((currentToken) => {
          if (currentToken) {
            console.log("currentToken:", currentToken);
          } else {
            console.log("Can not get token.")
          }
        }
  ).catch((err) =>{
    console.log("An error occurred while retrieving token." , err);
  });
    } else {
      console.log("Do not have permission.")
    }
  })
}

requestPermission();


  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js",{
        scope: '/'})
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  }
  

export { auth, provider, db, messaging, app }

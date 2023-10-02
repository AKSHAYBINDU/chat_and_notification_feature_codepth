
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
  );
    } else {
      console.log("Do not have permission.")
    }
  })
}

requestPermission();
export { auth, provider, db, messaging, app }

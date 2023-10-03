importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAwEe7VeakGJsQHwADj5Z9NZ9kcBoXeh40",
    authDomain: "chat-app-7c111.firebaseapp.com",
    projectId: "chat-app-7c111",
    storageBucket: "chat-app-7c111.appspot.com",
    messagingSenderId: "797079267812",
    appId: "1:797079267812:web:47fcab639631021c123ff1"
  };
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
  };

  self.registration.showNotification(payload.data.title, notificationOptions);
});

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Importez getDatabase

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA66Z1m7AtRCN1tD3sLib3qSKNPLQmxfik",
  authDomain: "yowl-48c83.firebaseapp.com",
  projectId: "yowl-48c83",
  storageBucket: "yowl-48c83.appspot.com",
  messagingSenderId: "582170534578",
  appId: "1:582170534578:web:cc19f9b1f208e203d2dfab",
  measurementId: "G-SDKCJYB2C7"
};

// Initialisez Firebase
const app = initializeApp(firebaseConfig);

// Initialisez Firebase Analytics
const analytics = getAnalytics(app);

// Initialisez Firebase Realtime Database avec l'URL spécifique de votre base de données
const db = getDatabase(app, "https://yowl-48c83-default-rtdb.europe-west1.firebasedatabase.app");

// Exportez l'application Firebase, Analytics, et l'instance de la base de données
export { app, analytics, db };

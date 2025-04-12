// src/firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Import de Firebase Auth
import { getFirestore } from 'firebase/firestore';  // Import de Firestore

// Configuration de ton projet Firebase (que tu as récupéré depuis la console Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyAwU2WWsyi3SI3Sr7AvHXV3M7uzC0u9NLc",
  authDomain: "reservation-hotel-dca22.firebaseapp.com",
  projectId: "reservation-hotel-dca22",
  storageBucket: "reservation-hotel-dca22.firebasestorage.app",
  messagingSenderId: "920725541061",
  appId: "1:920725541061:web:1739cd86a9e931fb21e0ac"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de l'authentification
const auth = getAuth(app);

// Initialisation de Firestore
const db = getFirestore(app);

export { auth, db };

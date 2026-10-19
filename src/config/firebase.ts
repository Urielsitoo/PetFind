import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Tus credenciales reales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3UC7q_GIbqF9dB720NtIqkACWLy5UGTo",
  authDomain: "petfind-85bef.firebaseapp.com",
  projectId: "petfind-85bef",
  storageBucket: "petfind-85bef.firebasestorage.app",
  messagingSenderId: "776360590405",
  appId: "1:776360590405:web:74415527a0eaf924d3772c"
};

// Inicializar app de Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Inicializar Auth
export const auth = getAuth(app);
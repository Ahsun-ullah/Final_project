import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLdJzS_myzZmPPK_SzpcbNAnZSLz-urSI",
  authDomain: "rap-apps-7031f.firebaseapp.com",
  projectId: "rap-apps-7031f",
  storageBucket: "rap-apps-7031f.appspot.com",
  messagingSenderId: "975978646379",
  appId: "1:975978646379:web:6f6248dfcf8137ae061a2e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);

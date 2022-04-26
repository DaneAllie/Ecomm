import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCFwVqco8xECaL6HpMtuh1e32uzHix7i0w",
	authDomain: "ecomweb-b567a.firebaseapp.com",
	projectId: "ecomweb-b567a",
	storageBucket: "ecomweb-b567a.appspot.com",
	messagingSenderId: "1048145967735",
	appId: "1:1048145967735:web:738715cb57321e897b2472"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
export const FIREBASE_REALTIME_DB = getDatabase(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

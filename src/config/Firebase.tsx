//import {FIREBASE_API_KEY} from '@env';
import env from '@config/EnvsApp';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: env.prodVariableFirebase.FIREBASE_API_KEY,
  authDomain: env.prodVariableFirebase.FIREBASE_AUTH_DOMAIN,
  projectId: env.prodVariableFirebase.FIREBASE_PROJECT_ID,
  storageBucket: env.prodVariableFirebase.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.prodVariableFirebase.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.prodVariableFirebase.FIREBASE_APP_ID,
  measurementId: env.prodVariableFirebase.FIREBASE_MEASUR_EMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Data = getFirestore(app);
const Storage = getStorage(app);


export {Auth, Data, Storage};
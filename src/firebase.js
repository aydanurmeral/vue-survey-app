import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  databaseURL: process.env.VUE_APP_FIREBASE_URL
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

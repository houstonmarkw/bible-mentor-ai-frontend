import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDzYsrRt10M7yLk9ZvqyGlxqIbor2G6vX0',
  authDomain: 'bible-mentor-ai-app.firebaseapp.com',
  projectId: 'bible-mentor-ai-app',
  storageBucket: 'bible-mentor-ai-app.appspot.com',
  messagingSenderId: '451476402934',
  appId: '1:451476402934:web:0d3a5929e69f7dedbc32d7',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);

import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

// api config
const firebaseConfig = {
  apiKey: "AIzaSyB1hZ4a81t2RuFpDWRFmSPM7obOZJbMpCo",
  authDomain: "petprofiles-a36d8.firebaseapp.com",
  projectId: "petprofiles-a36d8",
  storageBucket: "petprofiles-a36d8.firebasestorage.app",
  messagingSenderId: "949634668138",
  appId: "1:949634668138:web:9fca4ef0dd44bf510ddc13",
  measurementId: "G-EE7EZHXBFJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// connect to emulators if local
if (window.location.hostname === 'localhost') {
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
  connectAuthEmulator(auth, 'http://127.0.0.1:9099');
  connectStorageEmulator(storage, '127.0.0.1', 9199);
}

// export apps
export { app, db, auth, storage };

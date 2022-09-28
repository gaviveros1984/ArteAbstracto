import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF__mgR9fqEMqkF5uNBsYjOdG6fdqdnAQ",
  authDomain: "coder-2b5f5.firebaseapp.com",
  projectId: "coder-2b5f5",
  storageBucket: "coder-2b5f5.appspot.com",
  messagingSenderId: "543623974971",
  appId: "1:543623974971:web:2d22309416035b324e0c1e",
  measurementId: "G-MVJ8ESZCG6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db
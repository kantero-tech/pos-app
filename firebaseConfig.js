// Firebase configuration for Inventory POS
// Replace the placeholder values below with your Firebase project configuration.

const firebaseConfig = {
  apiKey: "", // e.g. "AIza..."
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the Firestore database
const db = firebase.firestore();
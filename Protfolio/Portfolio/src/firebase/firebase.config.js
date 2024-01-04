// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.vite_API_KEY,
    authDomain: import.meta.env.vite_AUTH_DOMAIN,
    projectId: import.meta.env.vite_PROJECTS_ID,
    storageBucket: import.meta.env.vite_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.vite_MESSAGING_SENDER_ID,
    appId: import.meta.env.vite_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
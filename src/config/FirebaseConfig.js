// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: XXXXXXXXXXXXXXXXXXXXXXX,
    authDomain: XXXXXXXXXXXXXXXXXX,
    databaseURL: XXXXXXXXXXXXXXXXXXXXXXXXX,
    projectId: XXXXXXXXXXXXXXXX,
    storageBucket: XXXXXXXXXXXX,
    messagingSenderId: XXXXXXXXXXXXXX,
    appId: XXXXXXXXXXXXXXXXXXXXXXX,
    measurementId: XXXXXXXXXXXXXXXXXXX
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;

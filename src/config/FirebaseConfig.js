// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK0VakXwGnl6yliaExzT6j4WDG5EYpz6A",
    authDomain: "database-762c4.firebaseapp.com",
    databaseURL: "https://database-762c4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "database-762c4",
    storageBucket: "database-762c4.appspot.com",
    messagingSenderId: "177698858099",
    appId: "1:177698858099:web:564035d82ff77da547f606",
    measurementId: "G-KH6RFM3YG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;
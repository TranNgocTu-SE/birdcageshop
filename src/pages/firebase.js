
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBs7Tsf7lkiKOxKM8hdPLg3mi8v45PjBio",
    authDomain: "uploadfile-5943a.firebaseapp.com",
    projectId: "uploadfile-5943a",
    storageBucket: "uploadfile-5943a.appspot.com",
    messagingSenderId: "204940872557",
    appId: "1:204940872557:web:347885bcb0d1cb81512864",
    measurementId: "G-2J0L2N9E81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export {storage};

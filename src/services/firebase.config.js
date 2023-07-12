import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyDWQkkXt3rQeloaIOKAexImt34hLkQscT0",
    authDomain: "tasker-d6e66.firebaseapp.com",
    projectId: "tasker-d6e66",
    storageBucket: "tasker-d6e66.appspot.com",
    messagingSenderId: "691747800966",
    appId: "1:691747800966:web:43d6b6b88baaddee43ce07"
  
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
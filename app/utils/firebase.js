import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA3VWTLkqGNDCL3BULi1hBdN6x2iV3tgOk",
    authDomain: "tenedores-7e2c9.firebaseapp.com",
    projectId: "tenedores-7e2c9",
    storageBucket: "tenedores-7e2c9.appspot.com",
    messagingSenderId: "324112568096",
    appId: "1:324112568096:web:4b2824ce744a9273d89145"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
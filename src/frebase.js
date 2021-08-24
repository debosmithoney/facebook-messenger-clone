import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyA-Q_txBOuExmRikOuiPeKMCZlFXmU-al0",
        authDomain: "facebook-messenger-clone-f840e.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-f840e.firebaseio.com",
        projectId: "facebook-messenger-clone-f840e",
        storageBucket: "facebook-messenger-clone-f840e.appspot.com",
        messagingSenderId: "482052045469",
        appId: "1:482052045469:web:64eef2554bca7ed426b274",
        measurementId: "G-BGVPTESZQ6"


});

const db = firebaseApp.firestore();

export default db;

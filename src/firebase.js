import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
});

const db = firebase.firestore();

export let testFunction = async () => {
    db.collection("users")
        .add({
            first: "Ada",
            last: "Lovelace",
            born: 1815,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
};

import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWcz7c8waI7YG4ekv4StlwH-C9lLE5_XA",
    authDomain: "catch-of-the-day-vaibhaw.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-vaibhaw.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
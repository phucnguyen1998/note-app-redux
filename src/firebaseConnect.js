import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC-AfzxS4Gf5fPulSY-HbwhC4b5LlPIi6w",
    authDomain: "notereact-dfc04.firebaseapp.com",
    databaseURL: "https://notereact-dfc04.firebaseio.com",
    projectId: "notereact-dfc04",
    storageBucket: "notereact-dfc04.appspot.com",
    messagingSenderId: "790967777519",
    appId: "1:790967777519:web:08bd8a668c627d28f6031a",
    measurementId: "G-CFN9RT6H7F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const noteData = firebase.database().ref('dataForNote');

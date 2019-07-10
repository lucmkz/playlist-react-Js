import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyDWVWiTLRI_cp87K7YUdyeUjds3yMiMkdg",
    authDomain: "playlist-25ba5.firebaseapp.com",
    databaseURL: "https://playlist-25ba5.firebaseio.com",
    projectId: "playlist-25ba5",
    storageBucket: "playlist-25ba5.appspot.com",
    messagingSenderId: "753676478435",
    appId: "1:753676478435:web:50e7cd9337590ffb"
})

const db = firebase.database()

export { db }
import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyC5n5sxz4Vy-tNjtx805LDYTMwzybEaGNU",
    authDomain: "cycling-app-318315.firebaseapp.com",
    databaseURL: "https://cycling-app-318315-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cycling-app-318315",
    storageBucket: "cycling-app-318315.appspot.com",
    messagingSenderId: "72527731398",
    appId: "1:72527731398:web:49e4358089ed28b23b15c7"
  };
  // Initialize Firebase
 var fireDb =  firebase.initializeApp(firebaseConfig);

 export default fireDb.database().ref()
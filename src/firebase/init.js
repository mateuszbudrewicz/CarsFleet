import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyBC5mbaGBmgd8d-TihtvYrTBALTzTznbjo",
    authDomain: "carsfleet-2a98c.firebaseapp.com",
    databaseURL: "https://carsfleet-2a98c.firebaseio.com",
    projectId: "carsfleet-2a98c",
    storageBucket: "carsfleet-2a98c.appspot.com",
    messagingSenderId: "56816481226"
  };
 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({ timestampsInSnapshots: true })

 export default firebaseApp.firestore()
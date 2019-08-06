import firebase from 'firebase/app';
import 'firebase/storage';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDu_0tjdASiS_3_0YhbcCOW9buUShPYD4E",
    authDomain: "photobook-e2e61.firebaseapp.com",
    databaseURL: "https://photobook-e2e61.firebaseio.com",
    projectId: "photobook-e2e61",
    storageBucket: "photobook-e2e61.appspot.com",
    messagingSenderId: "398780119690",
    appId: "1:398780119690:web:e3d6870a9fc527bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }
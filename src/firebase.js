
  import firebase from 'firebase';
  

  const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyBUKikX9XGwPnf4v6wWl-0A7n-nDGOkIhg",
    authDomain: "messenger-clone-fceed.firebaseapp.com",
    databaseURL: "https://messenger-clone-fceed.firebaseio.com",
    projectId: "messenger-clone-fceed",
    storageBucket: "messenger-clone-fceed.appspot.com",
    messagingSenderId: "658512131795",
    appId: "1:658512131795:web:d5eeab319b16ff37094626",
    measurementId: "G-Z4HZ7V9TYC"

  });

  const db = firebaseapp.firestore();

  export { db };
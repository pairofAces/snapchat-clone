import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD0-EwXrHMZxzmA5ZBdBoM4U1dwZxOor3Y",
  authDomain: "snapchat-clone-730bb.firebaseapp.com",
  projectId: "snapchat-clone-730bb",
  storageBucket: "snapchat-clone-730bb.appspot.com",
  messagingSenderId: "136877724395",
  appId: "1:136877724395:web:c36409a8d06697e57b64ae"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// create a "db" variable to have access to the firebase database
const db = firebaseApp.firestore();

// create auth variable to connect to firebase authentication
const auth = firebase.auth();

// create storage variable to access firebase storage via
// firebase's storage api
const storage = firebase.storage();

// create a provider variable to allow the app to have 
// connection to Google's authentication.
    // When a user sign's in, user can sign in with Google account
    // via a popup window
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
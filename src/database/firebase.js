 // Your web app's Firebase configuration
 import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyAZunQDeydF72F1gfTuvj18QKUYlSXdFrs",
    authDomain: "crud-react-29c28.firebaseapp.com",
    projectId: "crud-react-29c28",
    storageBucket: "crud-react-29c28.appspot.com",
    messagingSenderId: "93943202633",
    appId: "1:93943202633:web:ca16d7c34cfb8f50b2d098"
  };
  // Initialize Firebase
  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBDJzzmvii9IFo-1rIjxeaJMitEfcWD1kM",
    authDomain: "kwitter-54629.firebaseapp.com",
    databaseURL: "https://kwitter-54629-default-rtdb.firebaseio.com",
    projectId: "kwitter-54629",
    storageBucket: "kwitter-54629.appspot.com",
    messagingSenderId: "65688062679",
    appId: "1:65688062679:web:b0282902c8084a6f317e92"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
   purpose: "adding user"
    });
}
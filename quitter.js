//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBdhv55qpbygT7cy80XNUr1vyVyqFflQ4k",
  authDomain: "quitter-329dd.firebaseapp.com",
  databaseURL: "https://quitter-329dd-default-rtdb.firebaseio.com",
  projectId: "quitter-329dd",
  storageBucket: "quitter-329dd.appspot.com",
  messagingSenderId: "1033620256435",
  appId: "1:1033620256435:web:0eeb107929c44b3f3da2c6"
};
firebase.initializeApp(firebaseConfig);

function add_user(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "quitter_room.html";
}

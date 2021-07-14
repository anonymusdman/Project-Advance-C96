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

  var user_name = localStorage.getItem("user_name");
  var room_name = localStorage.getItem("room_name");


  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send(){
  var msg = document.getElementById("input_msg").value;
  firebase.database().ref(room_name).push({
        name_user:user_name, 
        message:msg,
        likes:0 
  });
  document.getElementById("input_msg").value = "";
}


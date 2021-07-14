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

  var user_name = localStorage.getItem("user_name") + "!";
  document.getElementById("user_name").innerHTML = user_name;

function create_room(){
    var room_name = document.getElementById("room").value;
    firebase.database().ref("/").child(room_name).update({whatarewedoing:"addingroom"});
    localStorage.setItem("room_name", room_name);
    window.location = "quitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
var row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoom(this.id)'>" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
function redirectToRoomName(name){
    localStorage.setItem("roomname", name);
    window.location = "quitter_page.html";
}

//End code
});});}
getData();
var firebaseConfig = {
      apiKey: "AIzaSyD5ovgC0q0RnPvvAM0YQmiSWaUhcqbTD30",
      authDomain: "kwitter-app-5c771.firebaseapp.com",
      databaseURL: "https://kwitter-app-5c771-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-5c771",
      storageBucket: "kwitter-app-5c771.appspot.com",
      messagingSenderId: "488982267624",
      appId: "1:488982267624:web:79b56ad3b36db3785b2b5d",
      measurementId: "G-LF2W0X29FN"
    };
    firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "WELCOME  "+ user_name+ "  !"

function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }
function getData() 
{
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class= 'room_name' id= "+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML +=row;

    //End code
}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
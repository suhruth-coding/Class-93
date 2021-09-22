// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBO8JYckq4jijTBEmB6YKbaipRzH2WKjt4",
      authDomain: "flutter-48565.firebaseapp.com",
      databaseURL: "https://flutter-48565-default-rtdb.firebaseio.com",
      projectId: "flutter-48565",
      storageBucket: "flutter-48565.appspot.com",
      messagingSenderId: "217029196214",
      appId: "1:217029196214:web:b695d2dd44c12f714aa917"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

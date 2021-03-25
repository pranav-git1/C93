//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
        apiKey: "AIzaSyB7c0XhhlmYuPTJGhaO2h4Ne27OGsH7LIY",
        authDomain: "kwitter-530f4.firebaseapp.com",
        projectId: "kwitter-530f4",
        storageBucket: "kwitter-530f4.appspot.com",
        messagingSenderId: "52676090552",
        appId: "1:52676090552:web:730bff2da322653069f24d",

    }
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);



function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();
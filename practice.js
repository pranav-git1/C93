  var firebaseConfig = {
      apiKey: "AIzaSyB7c0XhhlmYuPTJGhaO2h4Ne27OGsH7LIY",
      authDomain: "kwitter-530f4.firebaseapp.com",
      databaseURL: "https://kwitter-530f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-530f4",
      storageBucket: "kwitter-530f4.appspot.com",
      messagingSenderId: "52676090552",
      appId: "1:52676090552:web:730bff2da322653069f24d",
      measurementId: "G-BHDKZ70REW"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({ purpose: "adding user" });
  }
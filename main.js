// Vu codes-------------------------------

        // Initialize Firebase
  var config = {
    apiKey: "AIzaSyArvG1xk1bcGdTRRLUqjdZxDLcV-284H7Q",
    authDomain: "august-2018t-th.firebaseapp.com",
    databaseURL: "https://august-2018t-th.firebaseio.com",
    projectId: "august-2018t-th",
    storageBucket: "august-2018t-th.appspot.com",
    messagingSenderId: "837166823192"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    var userdatabase = firebase.database().ref("users").orderByKey()
    userdatabase.once("value", function(snapshot){
        snapshot.forEach(function(childsnapshot){
            var key = childsnapshot.key
            var childdata = childsnapshot.val();
            console.log("key = " +key)
            console.log("data "+childdata)
        })
    })

var  employeeName = "Vu Duong"
var    role = "Security"
var    startDate = "01/01/2011"
var    monthlyRate = "200"
var    monthsWorked = 23
var    totalBilled = 20202

function writeNewPost(employeeName, role, startDate, monthlyRate, monthsWorked, totalBilled) {
  // A post entry.
    var postData = {
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        monthsWorked: monthsWorked,
        totalBilled: totalBilled,
        // uid: uid,
    };
  console.log(postData)

  // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('users').push().key;
    console.log(newPostKey)

  // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/users/' + newPostKey] = postData;
    console.log(updates)
    firebase.database().ref().update(updates);
}
writeNewPost(employeeName, role, startDate, monthlyRate, monthsWorked, totalBilled)
// Vu Code -----------------------



//Danny Code 
    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().employeeName);
      console.log(childSnapshot.val().role);
      console.log(childSnapshot.val().startDate);
      console.log(childSnapshot.val().monthlyRate);
      console.log(childSnapshot.val().monthsWorked);
      console.log(childSnapshot.val().joinDate);

      // full list of items to the well
    
    $(".displayRow").append( 
        "<tr>" +
        "<th scope='row'></th>" + 
        "<td>" + childSnapshot.val().employeeName + "</td>" +
        "<td>" + childSnapshot.val().role + "</td>" +
        "<td>" + childSnapshot.val().startDate + "</td>" +
        "<td>" + childSnapshot.val().monthlyRate + "</td>" +
        "<td>" + childSnapshot.val().monthsWorked + "</td>" +
        "<td>" + childSnapshot.val().totalBilled + "</td>" +
        "</tr>");

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

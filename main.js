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
    // Below is what happens when the page refresh, using "once"
    userdatabase.once("value", function(snapshot){
            $(".displayRow").empty()      
        snapshot.forEach(function(childsnapshot){
            var key = childsnapshot.key
            var childdata = childsnapshot.val();
            console.log('test test '+childdata.employeeName)
            $(".displayRow").append( 
              "<tr>" +
              "<th scope='row'></th>" + 
              "<td>" + childdata.employeeName + "</td>" +
              "<td>" + childdata.role + "</td>" +
              "<td>" + childdata.startDate + "</td>" +
              "<td>" + childdata.monthlyRate + "</td>" +
              "<td>" + childdata.monthsWorked + "</td>" +
              "<td>" + childdata.totalBilled + "</td>" +
              "</tr>");
        })
    })



function writeNewPost(employeeName, role, startDate, monthlyRate, monthsWorked, totalBilled) {
  // This function takes innput from the form and update the firebase database
    var postData = {
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        monthsWorked: monthsWorked,
        totalBilled: totalBilled,
    };
  console.log(postData)
  // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('users').push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/users/' + newPostKey] = postData;
    console.log(updates)
    firebase.database().ref().update(updates);
}
// Below is what happens when user click submit
    $("#submit").on("click", function() {
      var     employeeName = "blink"
      var    role = "Security"
      var    startDate = "01/01/2011"
      var    monthlyRate = "200"
      var    monthsWorked = 23
      var    totalBilled = 20202
      // assumming we have all information above
      writeNewPost(employeeName, role, startDate, monthlyRate, monthsWorked, totalBilled)
      // Update the database
    });

//Danny Code 
    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    userdatabase.on("child_added", function(childSnapshot) {
      var childadded = childSnapshot.val()
    $(".displayRow").append( 
        "<tr>" +
        "<th scope='row'></th>" + 
        "<td>" + childadded.employeeName + "</td>" +
        "<td>" + childadded.role + "</td>" +
        "<td>" + childadded.startDate + "</td>" +
        "<td>" + childadded.monthlyRate + "</td>" +
        "<td>" + childadded.monthsWorked + "</td>" +
        "<td>" + childadded.totalBilled + "</td>" +
        "</tr>");

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

// Vu codes-------------------------------

        // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDnSKcK450cM1SRo6doE2oCQVOkigTa6Ow",
        authDomain: "testproject-ccb91.firebaseapp.com",
        databaseURL: "https://testproject-ccb91.firebaseio.com",
        projectId: "testproject-ccb91",
        storageBucket: "testproject-ccb91.appspot.com",
        messagingSenderId: "561234705065"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

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
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;
    console.log(updates)

    firebase.database().ref().update(updates);
}
writeNewPost(employeeName, role, startDate, monthlyRate, monthsWorked, totalBilled)
// Vu Code -----------------------
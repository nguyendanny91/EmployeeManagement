// Vu codes-------------------------------

var

function writeNewPost(employeeName, role, title, body) {
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

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
// Vu Code -----------------------
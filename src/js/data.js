window.signInUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      console.log("ingresse");
      
    })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };
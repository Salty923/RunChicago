$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $(".log-in");
  var emailInput = $("#login-email");
  var passwordInput = $("#login-password");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("click", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    


    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);

    // store first name and id to local storage
    getUserInfo();

  
    emailInput.val("");
    passwordInput.val("");

    




    function getUserInfo() {
      var emailQuery = emailInput.val().trim();
     // console.log("Test 1" + emailInput.val().trim());
     // console.log("Test 2" + emailInput.val());
     // console.log(emailInput);
      // console.log("Email Input:" + emailQuery);
      $.get("/api/getUserInfo/" + emailQuery, function (data, status) {
      //  console.log(`Status: ${status}`);
       
       // console.log(data);
        //console.log(`Testing data id response from db: ${data.id}`);

        if (localStorage) {

          // Store user's ID and first name to local storage
          localStorage.setItem("userId", `${data.id}`);
          localStorage.setItem("firstName", `${data.firstName}`)

        } else {
          alert("Sorry, your browser does not support local storage.");
        }
      });
    };
  });



  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function (data) {
      // window.location.replace(data);
      console.log(data);
      $('.signForm').remove();
      $('.move').toggleClass('slider');
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
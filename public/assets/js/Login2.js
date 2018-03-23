$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $(".log-in");
  var emailInput = $("input#login-email");
  var passwordInput = $("input#login-password");

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
    emailInput.val("");
    passwordInput.val("");

    // store first name and id to local storage
    getUserInfo();
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



function getUserInfo() {
  $.get(`/api/getUserInfo/${emailInput}`, function (data, status) {
    console.log(`Status: ${status}`);
    console.log(`Testing data id response from db: ${data.id}`);

    if (localStorage) {

      // Store user's ID and first name to local storage
      localStorage.setItem("userId", `${data.id}`);
      localStorage.setItem("firstName", `${data.firstName}`)

    } else {
      alert("Sorry, your browser does not support local storage.");
    }
  });
};
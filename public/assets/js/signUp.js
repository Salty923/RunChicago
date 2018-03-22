$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $(".get-started");
    var firstName = $("input#firstName-input");
    var lastName = $("input#lastName-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("click", function(event) {
        event.preventDefault();
        var userData = {
        firstName: firstName.val().trim(),
        lastName: lastName.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.firstName, userData.lastName, userData.email, userData.password);
      firstName.val("");
      lastName.val("");
      emailInput.val("");
      passwordInput.val("");
     
    });
  
    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(firstName, lastName, email, password) {
      $.post("/api/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });  
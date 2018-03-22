$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $(".log-in");
    var emailInput = $("input#login-email").val().trim();
    var passwordInput = $("input#login-password").val().trim();
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("click", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput,
        password: passwordInput
      };
      

  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      emailInput;
      passwordInput;
    }).then(function(){
      $.get(`/api/getUserInfo/${emailInput}`, function (data, status){
        console.log(`Status: ${status}`);
        console.log(data.id);
      });
    });
  
    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      }).then(function(data) {
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
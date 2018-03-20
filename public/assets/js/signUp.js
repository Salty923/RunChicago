$(document).ready(function () {

    $('#signUpButton').on('click',function(){
        let firstName = $('#firstName').val().trim();
        let lastName = $('#lastName').val().trim();
        let newEmail = $('#newEmail').val().trim(); 
        let newPassword = $('#newPassword').val().trim();
        alert(`${firstName} ${lastName} ${newEmail} ${newPassword}`);
    })

    $('#loginButton').on('click',function () {
        let logEmail = $('#logEmail').val().trim();
        let logPassword = $('#logPassword').val().trim();
        alert(`${logEmail} ${logPassword}`);
      })      
});

$(document).ready(function () {

    $('#submit').on('click',function () {
        var user = $('#userName').val().trim();
        var date = $('#date').val().trim();
        var time = $('#time').val().trim();
        var address =$('#addr').val().trim();
        var pace= $('#pace').val().trim();
        var message = $('#message').val().trim();

        alert(`${user}  ${date}  ${time}  ${address}  ${pace} ${message} `);
    })


    
    console.log("ready!");
});
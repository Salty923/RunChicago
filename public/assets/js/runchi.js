
$(document).ready(function () {
    var geocoder;

    $('#submit').on('click',function () {
        event.preventDefault();
        var user = $('#user').val();
        var date = $('#date').val().trim();
        var time = $('#time').val().trim();
        var address =$('#addr').val().trim();
        //var pace= $('#pace').val().trim();
        var message = $('#message').val().trim();

        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                console.log('geocoder results:');
                console.log(results);
            }
        });


        console.log(`${user}  ${date}  ${time}  ${address} ${message} `);
    })


    
    console.log("ready!");
});
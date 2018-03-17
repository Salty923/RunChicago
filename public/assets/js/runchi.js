$(document).ready(function () {
    var geocoder;

    $('.submit').on('click',function () {
        event.preventDefault();
        var userData = {
            user: $('#user').val(),
            date: $('#date').val().trim(),
            time: $('#time').val().trim(),
            address: $('#addr').val().trim(),
            //var pace= $('#pace').val().trim();
            message: $('#message').val().trim()
        }

        // AJAX post data
        $.post('/api/runs', userData, function (data) {
            console.log("Run added");
            console.log(data);
        });

        // geocoder = new google.maps.Geocoder();
        // geocoder.geocode({ 'address': address }, function (results, status) {
        //     if (status == google.maps.GeocoderStatus.OK) {

        //         console.log('geocoder results:');
        //         console.log(results);
        //     }
        // });


    })
    
    console.log("ready!");

});
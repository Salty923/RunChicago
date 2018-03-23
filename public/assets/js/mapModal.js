$(document).ready(function () {
    var geocoder;
    var map;
    var markers = [];



    $('body').on('click', '.join', function () {   
        var address = $(this).data('loc');
        var group = $(this).data('group');
        var date = $(this).data('date');
        var time = $(this).data('time');

        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                //console.log('geocoder results:');
                console.dir(results);

                var mapOptions = {
                    zoom: 16,
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                    },
                    zoomControl: true,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL
                    },
                    //streetViewControl: false,
                    center: results[0].geometry.location
                }

                map = new google.maps.Map(document.getElementById('findMap'), mapOptions);
                
                var image = 'https://d30y9cdsu7xlg0.cloudfront.net/png/248569-200.png'
                //map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    title: "Lets Run!",
                    label: "Run",
                    position: results[0].geometry.location,
                    draggable: false,
                    icon: image,
                    animation: google.maps.Animation.DROP
                });

                var contentString = '<div id="content">' +
                    '<div id="bodyContent">' +
                    `<h6><b>Run Group - ${group}</b></h6>` +
                    `<h6><b>Run Date - ${date}</b></h6>` +
                    `<h6><b>Run Time - ${time}</b></h6>` +
                    '</div>' +
                    '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });

                var getRequestId = localStorage.getItem("runId");

                $.get("/api/runsUsers/" + getRequestId, function (data, status) {
                    console.log(getRequestId);
                    console.log(status);
                    console.log(data);
                });


            } else {
                alert('Please try a different address.');
            }
        });

    })
        .trigger('click');

});
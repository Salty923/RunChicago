//This is for the auto complete form

function init() {
    var input = document.getElementById('addr');
    var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', init);
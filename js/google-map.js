function initialize() {
    var propertiPeta = {
        center: new google.maps.LatLng(-0.9144448270160942, 100.46634727680296),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);

    // membuat Marker
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-0.9144448270160942, 100.46634727680296),
        map: peta
    });

}

// event jendela di-load  
google.maps.event.addDomListener(window, 'load', initialize);

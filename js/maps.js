var map, infoWindow;
//var divmap = document.getElementById('map');

// cargarEventListeners();

// function cargarEventListeners() {
//     // Al cargar el documento, mostrar LocalStorage
//     document.addEventListener('DOMContentLoaded', CargarMapa);
// }

// function CargarMapa() {
//     initMap();

// }
var controlUI;

function CenterControl(controlDiv, map) {

    // Set CSS for the control border.
    controlUI = document.createElement('img');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '25px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.margin = '5px';
    controlUI.style.cursor = 'pointer';
    // controlUI.style.marginBottom = '22px';
    // controlUI.style.textAlign = 'center';
    //controlUI.title = 'Click para detectar ubicación';
    controlUI.id = 'imgubi';
    controlUI.src = 'images/maps/desconect.png';
    controlDiv.appendChild(controlUI);
    // Set CSS for the control interior.
    // var controlText = document.createElement('div');
    // controlText.style.color = 'rgb(25,25,25)';
    // controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    // controlText.style.fontSize = '16px';
    // controlText.style.lineHeight = '38px';
    // controlText.style.paddingLeft = '5px';
    // controlText.style.paddingRight = '5px';
    // //controlText.innerHTML = 'Ubicación';
    // controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function () {
        Localizarme();
    });

}
var geocoder;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -12.046,
            lng: -77.042
        },
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });
    geocoder = new google.maps.Geocoder;
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);



    //Localizarme();


}
var imagen = 'images/maps/person.png';
var marker = null;


function damedatos(geocoder, pos) {
    //var input = document.getElementById('latlng').value;
    //var latlngStr = input.split(',', 2);
    var latlng = pos;
    geocoder.geocode({
        'location': latlng
    }, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                //map.setZoom(11);
                //   var marker = new google.maps.Marker({
                //     position: latlng,
                //     map: map
                //   });
                // console.log(results[0].address_components);
                var distrito = results[0].address_components[2].long_name;
                var direccion = results[0].address_components[1].long_name + ', ' + results[0].address_components[0].long_name + ', ' + results[0].address_components[2].long_name;
                infoWindow.setContent(results[0].formatted_address);
                document.getElementById('pdistrito').innerHTML = distrito;
                document.getElementById('pdireccion').innerHTML = direccion;
                //   infowindow.setContent(results[0].formatted_address);
                //   infowindow.open(map, marker);
            } else {
                window.alert('No results found');
            }
        } else {
            //window.alert('Geocoder failed due to: ' + status);
        }
    });
}


function Localizarme() {
    if (marker != null) {
        marker.setMap(null);
    }
    var ubitexto = '¿Se encuentra aqui?';
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent(ubitexto);
    // Try HTML5 geolocation.
    if (navigator.geolocation) {

        // imgloc.src('images/maps/conect2.png');

        navigator.geolocation.getCurrentPosition(function (position) {
            document.getElementById('imgubi').src = 'images/maps/conectar.png';
            document.getElementById('imgubi').style.width = '54px';

            // var latitud =
            // var longitud =
            //marker.setMap(map);

            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            damedatos(geocoder, pos);

            marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: imagen,
                draggable: true
                //animation: google.maps.Animation.DROP,
                //title: 'titulo 1'
            });
            map.panTo(pos);
            map.setZoom(15);
            infoWindow.open(map, marker);
            marker.addListener('click', function () {

                infoWindow.open(map, marker);
            });
            map.setCenter(pos);

            // console.log(marker.latLng.lat());
            // console.log(marker.latLng.lng());
            document.getElementById("plat").innerHTML = marker.getPosition().lat();
            document.getElementById("plng").innerHTML = marker.getPosition().lng();

            //geocodeLatLng(geocoder, marker.getPosition().lat(), marker.getPosition().lng());
            arrastrarmarker();



        }, function () {

            //Localizacion no encontrada
            // handleLocationError(true, infoWindow, map.getCenter())
            document.getElementById('current').innerHTML = '<p>No es posible determinar su ubicación, seleccione una en el mapa</p>';


            map.addListener('click', function (e) {
                if (marker != null) {
                    marker.setMap(null);
                }
                map.setZoom(18);
                placeMarkerAndPanTo(e.latLng, map);
                infoWindow.open(map, marker);
                document.getElementById('plat').innerHTML = e.latLng.lat();
                document.getElementById('plng').innerHTML = e.latLng.lng();
                damedatos(geocoder, marker.getPosition());
                arrastrarmarker();
                ////geocodeLatLng(geocoder, map,e.latLng);
            });

            function placeMarkerAndPanTo(latLng, map) {
                marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    icon: imagen,
                    draggable: true
                });
                map.panTo(latLng);
            }
        });
    } else {
        // Navegador no acepta gelocación
        //handleLocationError(false, infoWindow, map.getCenter());
        document.getElementById('current').innerHTML = '<p>Su Navegador no permite gelocación</p>';
    }
}


// function geocodeLatLng(geocoder, lat, lng) {
//     //var input = document.getElementById('latlng').value;
//     //var latlngStr = input.split(',', 2);
//     //var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
//     var pos = {
//         lat: lat,
//         lng: lng
//     };
//     document.getElementById('pdistrito').innerHTML = 'dime algoo';
//     geocoder.geocode({
//         'location': pos
//     }, function (results, status) {
//         if (status === 'OK') {
//             if (results[0]) {
//                 //map.setZoom(11);
//                 //   var marker = new google.maps.Marker({
//                 //     position: latlng,
//                 //     map: map
//                 //   });
//                 //   infowindow.setContent(results[0].formatted_address);
//                 //   infowindow.open(map, marker);
//                 document.getElementById('pdistrito').innerHTML = results[0].formatted_address;
//             } else {
//                 window.alert('No results found');
//             }
//         } else {
//             window.alert('Geocoder failed due to: ' + status);
//         }
//     });
// }


function arrastrarmarker() {
    google.maps.event.addListener(marker, 'dragend', function (e) {
        // document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat() + ' Current Lng: ' + evt.latLng.lng() + '</p>';
        infoWindow.open(map, marker);
        document.getElementById('plat').innerHTML = marker.getPosition().lat();
        document.getElementById('plng').innerHTML = marker.getPosition().lng();
        //geocodeLatLng(geocoder, map,marker.getPosition());
        damedatos(geocoder, marker.getPosition());
    });

    google.maps.event.addListener(marker, 'dragstart', function (e) {
        document.getElementById('current').innerHTML = '<p>Moviendo marcador...</p>';

    });
}
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'No es posible determinar su ubicación, seleccione una en el mapa' :
//         'Su Navegador no permite gelocación');
//     infoWindow.open(map);
// }
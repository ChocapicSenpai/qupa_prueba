function panico() {
    var lat = sessionStorage.getItem("lat");
    var longitud = sessionStorage.getItem("longitud");
    $.ajax({
        url: 'model/panico.modelo.php',
        type: 'post',
        data: { 'jsaccion': 'IngresaAlerta', 'lat': lat, 'longitud': longitud },
        success: function(data) {
            $('#divmsg').html(data);
        },
        error: function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function alerta() {
    var reinicio = 10;
    var lat = sessionStorage.getItem("lat");
    var longitud = sessionStorage.getItem("longitud");

    var alerta = sessionStorage.getItem("alerta");
    var cont = 1 + parseInt(sessionStorage.getItem("contador"));
    sessionStorage.setItem("contador", cont);
    //$("#divmsg").html(cont);
    if (cont > reinicio) {
        sessionStorage.setItem("alerta", 0);
        sessionStorage.setItem("contador", 0);
        //var alerta=0;
    }
    if (alerta == 1 && cont > 0) return 0;
    $.ajax({
        url: 'model/panico.modelo.php', //Consulta alerta
        type: 'post',
        data: { 'jsaccion': 'ConsultaAlerta', 'lat': lat, 'longitud': longitud },
        success: function(data) {
            var datos = JSON.parse(data);
            if (datos.cont > 0) {
                alert("Alerta de robo en tu zona!");
                sessionStorage.setItem("alerta", "1");
                console.log("lat:" + lat + " " + "longitud:" + longitud);
            }
            console.log("resp:" + datos.cont + " " + datos.sql);
        },
        error: function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function geolocate() {
    if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
    }
}

function onGeolocateSuccess(coordinates) {
    const { latitude, longitude } = coordinates.coords;
    sessionStorage.setItem("lat", latitude);
    sessionStorage.setItem("longitud", longitude);

    console.log('Found coordinates: ', latitude, longitude);
}

function onGeolocateError(error) {
    console.warn(error.code, error.message);

    if (error.code === 1) {
        // they said no
    } else if (error.code === 2) {
        // position unavailable
    } else if (error.code === 3) {
        // timeout
    }
}
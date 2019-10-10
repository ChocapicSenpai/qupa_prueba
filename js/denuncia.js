var btnCrearIncidencia = document.getElementById('btnCrearIncidencia');
var btnSubirVideo = document.getElementById('uploadedFile');
// window.onload = function() {
//     MostrarIncidencia();

// };
CargarEventListener();
// cargarImagen();

function CargarEventListener() {
    // id_Incidencias.addEventListener('DOMContentLoaded', MostrarIncidencia);
    if (btnCrearIncidencia) {
        btnCrearIncidencia.addEventListener('click', guardarDenuncia);
    }
    // if (btnSubirVideo) {
    //     btnSubirVideo.addEventListener('click', CargarDenuncia);
    // }
}

function mensaje() {
    console.log('holaaaaaa')
}

function inicio() {
    lista(1);
}

function CargarDenuncia() {
    var url = 'index.php';
    fetch(url)
        .then(function(response) { // Primer THEN CONEXION CON EL ARCHIVO
            if (response.ok) {
                return response.text();
            } else {
                throw "Error en la llamada Ajax";
            }
        }).then(function(response) { // SE TIENE LOS DATOS, SE PUEDE IMPRIMIR
            //Conversion a objeto
            var alerta = document.getElementById('alerta');

            alerta.style.display = 'none';

            let html = '';
            html += ` <div class="form-group">
            <textarea id="txtaDescripcion" name="txtaDescripcion" rows="3" placeholder="Descripcion"></textarea><span class="barra" ></span>
          </div>
          <div class="d-flex flex-column">
      
            <div style="text-align: center" class="mb-2 mt-1">
              <h4>Localización</h4>
            </div>
            <div class="d-flex w-auto mb-4" style="height: 25rem;">
              <div class="w-100  rounded-lg border" id="map"></div>
              <p id="plat" hidden>
              </p>
              <p id="plng" hidden>
              </p>
              <p id="pdistrito" hidden>
              </p>
              <p id="pdireccion" hidden>
              </p>
            </div>
            <p id="current"></p>
      
            <div class="d-flex mb-5 ">
              <!-- <button type="submit" class="ml-auto btn btn-primary">Guardar incidencia</button> -->
              <button type="button" id="btnCrearIncidencia" class="btn btn-denuncia btn-block"> Enviar </button>
            </div>
            <script type="text/javascript">initMap()</script> `;

            console.log();
            console.log(html);
            document.getElementById('htmlReg').innerHTML = html;

        })
        .catch(function(error) { // CONTROLADOR DE ERRORES
            console.error("!Hubo un error!", error);
        });
    paginacion();
}



function MostrarIncidencia() {
    var url = '../model/Incidencia.modelo.php';
    const data = new FormData();
    data.append('pag', 1);
    data.append('jsaccion', 'ListarIncidencia');
    data.append('jsid_usuario', null);

    var miInit = {
        method: 'POST',
        body: data
    };

    fetch(url, miInit)
        .then(function(response) { // Primer THEN CONEXION CON EL ARCHIVO
            if (response.ok) {
                return response.text();
            } else {
                throw "Error en la llamada Ajax";
            }
        }).then(function(response) { // SE TIENE LOS DATOS, SE PUEDE IMPRIMIR
            //Conversion a objeto
            var respuesta = JSON.parse(response);

            // let incidencias = respuesta.map(incidencia => { return { id_incidencia: incidencia.id_incidencia, fecha: incidencia.fecha, titulo: incidencia.titulo } })
            // incidencias.map((incidencia, indice, Array) => {
            //     console.log(indice);
            //     console.log(incidencia.titulo);
            // })

            let html = '';
            respuesta.forEach(function(datos) {

                html += `
                <div class="col-md-4 mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="http://placehold.it/300x200" alt="">
                    <div class="card-body">
                        <h4 class="card-title">${datos.titulo}</h4>
                        <p class="card-text"><small class="text-muted">${datos.fecha}-${datos.hora}</small></p>
                        <p class="card-text">${datos.descripcion}</p>
                    </div>
                    <div class="card-footer">
                        <a href="Detalle_incidencia.php?id=${datos.id_incidencia}" class="btn btn-primary">Ver detalles</a>
                    </div>
                </div>
			</div>
            `
            });
            document.getElementById('incidencias_row').innerHTML = html;

        })
        .catch(function(error) { // CONTROLADOR DE ERRORES
            console.error("!Hubo un error!", error);
        });
    paginacion();
}

function lista(pag) {
    var url = '../model/denuncia.modelo.php';
    const data = new FormData();
    data.append('pag', pag);
    data.append('jsaccion', 'Listar');

    var miInit = {
        method: 'POST',
        body: data
    };

    fetch(url, miInit)
        .then(function(response) { // Primer THEN CONEXION CON EL ARCHIVO
            if (response.ok) {
                return response.json();
            } else {
                throw "Error en la llamada Ajax";
            }
        }).then(function(response) { // SE TIENE LOS DATOS, SE PUEDE IMPRIMIR

            let html = '';
            response.forEach(function(datos) {

                html += `
                <tr>
             			<td>${datos.id_denuncia}</td>
             			<td>${datos.descripcion}</td>
             			<td>${datos.hora}</td>
                         <td>${datos.fecha}</td>
                         <td>${datos.estado}</td>
             			<td>
             				<button class='btn btn-info' type='button' onclick='editar(${datos.id_denuncia})'>Editar</button>
            				<button class='btn btn-danger' type='button' onclick='eliminar(${datos.id_denuncia})'>Eliminar</button>
             			</td>
             		</tr>
            `;

            });
            document.getElementById('divregistros').innerHTML = html;

        })
        .catch(function(error) { // CONTROLADOR DE ERRORES
            console.error("!Hubo un error!", error);
        });
    paginacion();
}

function eliminar(id) {

    var url = '../model/incidencia.modelo.php';

    // Enviando datos post
    const data = new FormData();
    data.append('jsaccion', 'Eliminar');
    data.append('jsid_usuario', id);

    var miInit = {
        method: 'POST',
        body: data
    };

    fetch(url, miInit)
        .then(response => response.json()) // Si la conexion es correcta -> retorno la respuesta en texto
        .then(function(response) { // SE TIENE LOS DATOS, SE PUEDE IMPRIMIR

            if (response == '1') {
                var datos = JSON.parse(response);
                console.log(datos.titulo);
                document.getElementById('divmsg').innerHTML = 'Registro eliminado';

                lista(1);


            } else {
                document.getElementById('divmsg').innerHTML = 'Error al eliminar registro!';

                // $("#divmsg").html("Error al eliminar el registro!");
            }
        })
        .catch(function(error) { // CONTROLADOR DE ERRORES
            console.error("!Hubo un error!", error);
        });

}

function guardarDenuncia() {

    // var id_inci = $("#id_incidencia").val();
    //var id_usu = $("#idUsuario").val();
    //var titu = $("#txtTitulo").val();
    var desc = document.getElementById('txtaDescripcion').value;
    var lat = document.getElementById('plat').innerHTML;
    var lon = document.getElementById('plng').innerHTML;
    var distrito = document.getElementById('pdistrito').innerHTML;
    var direccion = document.getElementById('pdireccion').innerHTML;
    var video = document.getElementById('uploadedFile').files[0];
    // console.log(video);


    console.log(desc);
     console.log(lat);
     console.log(lon);
    console.log(video);
     console.log(distrito);
    console.log(direccion);

    // Guardar
    var url = '../model/denuncia.modelo.php';
    // Enviando datos post
    var data = new FormData();
    //data.append('jsid_usuario', id_usu);
    data.append('jsaccion', 'Guardar');
    data.append('jsdescripcion', desc);
    data.append('jslatitud', lat);
    data.append('jslongitud', lon);
    data.append('jsdistrito', distrito);
    data.append('jsdireccion', direccion);
    // data.append('jsimagen', imagen);
    data.append('jsvideo', video);


    var miInit = {
        method: 'POST',
        body: data
    };

    fetch(url, miInit)
        .then(function(response) { // Primer THEN CONEXION CON EL ARCHIVO
            if (response.ok) {
                return response.text();
            } else {
                throw "Error en la llamada Ajax";
            }
        }).then(function(response) { // SE TIENE LOS DATOS, SE PUEDE IMPRIMIR
            if (response = 1) {
                console.log(response);
                alert('Registro exitoso');
                // document.getElementById('divmsg').innerHTML = 'Registro actualizado';
                // lista(1);


            }
            // else {
            // document.getElementById('divmsg').innerHTML = 'Error al actualizar registro!';
            // console.log('Fallo :');

            // $("#divmsg").html("Error al eliminar el registro!");
            // }
        })
        .catch(function(error) { // CONTROLADOR DE ERRORES
            console.error("!Hubo un error!", error);
        });
    //limpiar();
}

// function editar(id) {
//     $.ajax({
//         url: '../model/incidencia.modelo.php',
//         dataType: 'text',
//         type: 'post',
//         data: { 'jsaccion': 'Editar', 'jsid_incidencia': id },
//         success: function(data) {
//             var datos = JSON.parse(data);
//             $("#divform").modal("toggle");
//             $("#id_incidencia").val(datos.id_incidencia);
//             $("#id_usuario").val(datos.id_usuario);
//             $("#txtTitulo").val(datos.titulo);
//             $("#txtDescripcion").val(datos.descripcion);
//             //$("#txtemail").val(datos.email);
//             console.log(data);
//         },
//         error: function(jqXhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// }

function limpiar() {
    //$("#id_usuario").val('');
    $("#txtTitulo").val('');
    $("#txtDescripcion").val('');
    //$("#txtpassword").val('');
    // $("#txtestado").val('');
}

function nuevo() {
    limpiar();
    $("#divform").modal("toggle");
}

function paginacion() {
    // $.ajax({
    //     url: 'paginacion.php',
    //     dataType: 'text',
    //     type: 'post',
    //     data: {},
    //     success: function(data) {
    //         $("#paginacion").html(data);
    //     },
    //     error: function(jqXhr, textStatus, errorThrown) {
    //         console.log(errorThrown);
    //     }
    // });
}



function cargarImagen() {

    const fotos = document.getElementById('img');
    fotos.addEventListener("change", function() {
        if (fotos.value != null) {
            var imagen = this.files[0];

            /*=============================================
            VALIDAMOS EL FORMATO DE LA IMAGEN SEA JPH O PNG
            =============================================*/

            if (imagen["type"] != "image/jpeg" && imagen["type"] != "image/png" && imagen["type"] != "video/mp4") {

                // $(".nuevaFoto").val("");
                fotos.value = "";

                swal({
                    title: "Error al subir la imagen",
                    text: "¡La imagen debe estar en formato JPG o PNG!",
                    type: "error",
                    confirmButton: "¡Cerrar!"

                });


            } else if (imagen["size"] > 2000000) {

                // $(".nuevaFoto").val("");
                fotos.value = "";

                swal({

                    title: "Error al subir la imagen",
                    text: "¡La imagen no debe pesar más de 2MB!",
                    type: "error",
                    confirmButton: "¡Cerrar!"

                });

            } else {

                var datosImagen = new FileReader;
                datosImagen.readAsDataURL(imagen);

                $(datosImagen).on("load", function(event) {

                    var rutaImagen = event.target.result;

                    $(".previsualizar").attr("src", rutaImagen);

                    //document.getElementById('previsualizar').attributes("src", rutaImagen);

                })

            }
        }
    });

}
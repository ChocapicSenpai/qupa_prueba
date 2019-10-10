var btnCrearUsuario = document.getElementById('btnRegistrarUsuario');
var btnLogin = document.getElementById('btnLogin');

// window.onload = function() {
//     MostrarIncidencia();

// };
CargarEventListener();
//cargarImagen();

function CargarEventListener() {
    // id_Incidencias.addEventListener('DOMContentLoaded', MostrarIncidencia);
    if (btnCrearUsuario) {
        btnCrearUsuario.addEventListener('click', guardarUsuario);
    }
    if (btnLogin) {
        btnLogin.addEventListener('click', login);
    }


}

function mensaje() {
    console.log('holaaaaaa')
}

function inicio() {
    lista(1);
}

function login() {

    var lcorreo = document.getElementById('txtUser').value;
    var lpassword = document.getElementById('txtPass').value;

    // Guardar
    var url = 'model/usuario.modelo.php';
    // Enviando datos post
    const data = new FormData();
    //data.append('jsid_usuario', id_usu);
    data.append('jsaccion', 'Login');
    data.append('jscorreo', lcorreo);
    data.append('jspassword', lpassword);

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
            console.log(response);
            if (response == 1) {
                // lista(1);
                setTimeout(() => {
                    console.log(response);
                    mensaje = document.getElementById('divmsg');
                    mensaje.className += ' alert-success'
                    mensaje.style.display = (mensaje.style.display == 'none') ? 'block' : 'none';
                    mensaje.innerHTML = 'Bienvenido a Maat';
                    window.location="./registro_denuncia.php";


                }, 1000);


            } else {
                setTimeout(() => {
                    console.log(response);
                    mensaje = document.getElementById('divmsg');
                    mensaje.className += ' alert-danger'
                    mensaje.style.display = (mensaje.style.display == 'none') ? 'block' : 'none';
                    mensaje.innerHTML = 'Error en el usuario o contraseña';

                }, 800);
            }
        })
        .catch(function(error) { // CONTROLADOR DE ERRORES
            console.error("!Hubo un error!", error);
        });
    //limpiar();
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
    var url = '../model/usuario.modelo.php';
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

function guardarUsuario() {
    // var id_inci = $("#id_incidencia").val();
    //var id_usu = $("#idUsuario").val();
    //var titu = $("#txtTitulo").val();
    var dni = document.getElementById('dni').value;
    var nombres = document.getElementById('nombres').value;
    var appaterno = document.getElementById('appaterno').value;
    var apmaterno = document.getElementById('apmaterno').value;
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;



    // Guardar
    var url = 'model/usuario.modelo.php';
    // Enviando datos post
    const data = new FormData();
    //data.append('jsid_usuario', id_usu);
    data.append('jsaccion', 'Guardar');
    data.append('jsdni', dni);
    data.append('jsnombres', nombres);
    data.append('jsape_paterno', appaterno);
    data.append('jsape_materno', apmaterno);
    data.append('jscorreo', correo);
    data.append('jspassword', password);
    data.append('jstelefono', telefono);
    data.append('jsdireccion', direccion);


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
            // if (response = 1) {
            console.log(response);
            // document.getElementById('divmsg').innerHTML = 'Registro actualizado';
            // lista(1);


            // } else {
            // document.getElementById('divmsg').innerHTML = 'Error al actualizar registro!';
            // console.log('Fallo :');

            // $("#divmsg").html("Error al eliminar el registro!");
            // }
            //        })
            //        .catch(function(error) { // CONTROLADOR DE ERRORES
            //            console.error("!Hubo un error!", error);
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

    const fotos = document.getElementById('foto');
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
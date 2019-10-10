<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Inicie Sesión</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor_start/bootstrap/css/bootstrap.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/business-frontpage.css" rel="stylesheet">


</head>

<body>

  <div class="container ">
    <div class="abs-center">
      <div class="row  justify-content-md-center">

        <form class="col col-md-8 col-lg-6 " enctype="multipart/form-data">
          <div class="form-group">
            <div class="text-center">

              <div class="d-flex flex-column justify-content-center mt-2">
                <img class="mx-auto d-block " id="logo2" src="images/qupa.jpg">
                <h2 class="mt-4"></h2>
              </div>
            </div>
          </div>
          <div id="divmsg" class="alert" style="display: none;"></div>

          <div class="d-flex mt-2">
            <div class="alert" id="RegistroMensaje"></div>
          </div>
          <div class="form-group">
            <input type="hidden" name="" id="" value="1">

            <input type="text" class="bbo" class="form-control" id="txtUser" name="txtUser" placeholder="Usuario"><span class="barra"></span>

          </div>

          <div class="form-group">
            <input type="hidden" name="" id="" value="1">

            <input type="password" class="bbo" class="form-control" id="txtPass" name="txtPass" placeholder="Contraseña"><span class="barra"></span>

          </div>


          <div class="d-flex mb-3 ">
            <!-- <button type="submit" class="ml-auto btn btn-primary">Guardar incidencia</button> -->
            <button type="button" id="btnLogin" class="btn btn-denuncia btn-block" onclick="location.href='registro_basura_usuario_1.php'"> Ingresar </button>
          </div>
          <p href="registro_basura_usuario_1.php">
          <div class="d-flex mb-3 ">
            <!-- <button type="submit" class="ml-auto btn btn-primary">Guardar incidencia</button> -->
            <button type="button" id="btnRegistrar" class="btn btn-denuncia btn-block"> Registrarme </button>
          </div>
          <p href="login_usuario.php">

        </form>
      </div>

    </div>
  </div>
  

</body>

</html>

<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Registrar denuncia</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor_start/bootstrap/css/bootstrap.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/business-frontpage.css" rel="stylesheet">


</head>

<?php
include("view/navbar.php");
?>

<body>
  <div class="abs-center ">

  <div class="container ">

    <div class="row  justify-content-md-center">


      <form class="col col-md-8 col-lg-6" enctype="multipart/form-data">
  <div class="row">
    <div class="col">
      <div class="articulos"><div class="titulo">Reciclador</div><img src="images/idre.png" alt="Electrónicos" class="img_u3">
    </div>
    
    </div>
    <div class="col">
     <div class="articulos"><div class="titulo">Vehiculo</div><img src="images/sco.png" alt="Electrónicos" class="img_u3">
    </div>
    
    </div>
</div>
   
    <div class="d-flex flex-column">

      <div style="text-align: center" class="mb-2 mt-1">
        <h4>Localización del reciclador</h4>
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



      </form>
    </div>
  </div>

  </div>
  <!-- /.container -->

  <!-- Google maps -->
  <script src="js/botones.js"></script>
  <script src="js/maps.js"></script>
  <script src="js/denuncia.js"></script>

  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA9ttmcrFlXRFyOsytUEOKVf-_d9rPgy1I&callback=initMap">
  </script>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>

</html>
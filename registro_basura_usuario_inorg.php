
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

<!--
  ?php session_start();
  if (!isset($_SESSION['user'])) {
    header('Location:login_usuario.php');
  }
?>
-->
<nav class="navbar navbar-expand-lg navbar-dark bg-header mb-2"style=" 
  position: relative;
  top: 0;
  width: 100%;
  height: 7%;
  color: white;">

  <div class="container" >
    <!-- 
    <img class="logo w-auto" style="height: 3rem" img src="images/altavoz-f.png" alt="">
   -->
    <a class="navbar-brand" href="#">
      <img src="images/altavoz-f.png" width="30" height="30" class="d-inline-block align-top" alt="" onclick="location.href='registro_basura_usuario_1.php';">
      
      <?php if(isset($_SESSION['user']['id'])){
        echo $_SESSION['user']['nombres'];
      } ?>
      Usuario
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
         <li class="nav-item">
          <a class="nav-link" href="#">Mi reciclaje</a>
        </li>
    </div>

    
 <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
         <li class="nav-item">
          <a class="nav-link" href="#">Perfil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Perfil</a>
        </li>
          </div> 
 -->
 
  </div>
</nav>
  <div class="abs-center">

<body>

 <div class="container">
  <div class="row justify-content-center">


<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-1" ><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/monitorlcd.png" alt="Electrónicos" class="img-fluid" onclick="location.href='registro_basura_usuario_2.php';">
  <div class="titulo">Electrónicos</div></div></a></div>


<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-2"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/blusa.png" alt="Ropa" class="img-fluid" onclick="location.href='registro_basura_usuario_2.php';">
  <div class="titulo">Ropa</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-3"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/bolsas.png" alt="Accesorios de vestir" class="img-fluid" onclick="location.href='registro_basura_usuario_2.php';">
  <div class="titulo">Accesorios de vestir</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-4"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/botas.png" alt="Zapatos" class="img-fluid" onclick="location.href='registro_basura_usuario_2.php';">
  <div class="titulo">Zapatos</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-5"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/cuento.png" alt="Libros" class="img-fluid">
  <div class="titulo">Libros</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-6"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/andadera.png" alt="Objetos de bebés" class="img-fluid">
  <div class="titulo">Objetos de bebés</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-7"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/bicicletas.png" alt="Juguetes" class="img-fluid">
  <div class="titulo">Juguetes</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-8"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/casco.png" alt="Deportes" class="img-fluid">
  <div class="titulo">Deportes</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-9"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/amplificador.png" alt="Instrumentos musicales" class="img-fluid">
  <div class="titulo">Instrumentos musicales</div></div></a></div><div class="w-100 d-none d-xl-block"></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-10"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/dron.png" alt="Kit de viajeros" class="img-fluid">
  <div class="titulo">Kit de viajeros</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-11"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/presion.png" alt="Medicina" class="img-fluid">
  <div class="titulo">Medicina</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-12"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/mesademetal.png" alt="Muebles hogar" class="img-fluid">
  <div class="titulo">Muebles hogar</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-13"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/archivero.png" alt="Muebles oficina" class="img-fluid">
  <div class="titulo">Muebles oficina</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/capsulas-cafe.png" alt="Cápsulas de café" class="img-fluid">
  <div class="titulo">Cápsulas de café</div></div></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-15"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/cerveza.png" alt="Latas" class="img-fluid">
  <div class="titulo">Latas</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-16"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/caladora.png" alt="Herramientas" class="img-fluid">
  <div class="titulo">Herramientas</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-17"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/arnes.png" alt="Equipo de seguridad" class="img-fluid">
  <div class="titulo">Equipo de seguridad</div></div></a></div>

<div class="col-4 col-md-3 col-lg-2 col-xl px-1 px-md-3"><a data-fancybox data-src="#popup-18"><div class="articulos"><img src="https://www.juntaentregayrecicla.com.mx/wp/wp-content/uploads/2017/10/kit-de-ayuda.png" alt="Kit de ayuda" class="img-fluid">
  <div class="titulo">Kit de ayuda</div></div></a></div>
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
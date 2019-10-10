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
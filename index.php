<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ściągi WWW</title>

    <!-- Style -->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://www.napad.pl/assets/vendors/bootstrap-4.5.3-dist/css/bootstrap.min.css?ver=2.9">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />

    <!-- Skrypty -->
    <script src="scripts.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://www.napad.pl/assets/vendors/bootstrap-4.5.3-dist/css/bootstrap.min.css?ver=2.9">
    <link rel="preload" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    

    <!-- Ikony -->
    <link rel="preload" href="https://www.napad.pl/assets/vendors/fontawesome-free-6.7.2-web/css/all.min.css?ver=2.9" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/line-awesome@1.3.0/dist/line-awesome/css/line-awesome.min.css">
    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
</head>

<body class="col-12 mx-auto">

<!-- Spis treści -->
<?php include 'modules/spis-tresci.html';?>

<div class="container-fluid row justify-content-between m-0 p-0">
<!-- MODUŁ ---------------------
---- Ściąga symboli ----------->
<?php include 'modules/symbole.html';?>
<!-- MODUŁ ---------------------
---- Linki do producentów ----->
<?php include 'modules/linki.html';?>
</div>

<!-- MODUŁ ---------------------
---- Klasy IP IK -------------->
<?php include 'modules/ipik.html';?>

<!-- MODUŁ ---------------------
---- Generator ciągów --------->
<?php include 'modules/ciagi.html';?>

<!-- MODUŁ ---------------------
---- Materiał wyk. kamer ------>
<?php include 'modules/material-kamer.html';?>

<!-- MODUŁ ---------------------
---- Tagi wyszukiwania -------->
<?php include 'modules/tagi.html';?>

<!-- MODUŁ ---------------------
---- Sekcje opisowe ----------->
<?php include 'modules/sekcje-opisowe.html';?>

<!-- MODUŁ ---------------------
---- Konwerter specyfikacji --->
<?php include 'modules/konwerter-spec.html';?>

   
<!---------------------------------------------------------------------------------------
-------- KONIEC MODUŁÓW -----------------------------------------------------------------
---------------------------------------------------------------------------------------->

<script type="text/javascript" src="https://www.napad.pl/assets/frontend/js/dist/scripts.min.js?ver=3.15"></script>
</body>
</html>



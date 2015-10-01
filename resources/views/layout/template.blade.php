<!--/**
 * Created by PhpStorm.
 * User: Sifat
 * Date: 9/28/2015
 * Time: 12:19 PM
 */
-->
<!DOCTYPE html>
<html>
    <head>
        <title>
            @yield('title')
        </title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/custom.css" />

        <!-- Optional theme -->
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
        <link rel="stylesheet" type="text/css" href="css/dropzone.css">
        <link rel="stylesheet" type="text/css" href="css/footers.css">
            @yield('css')

        <!-- Scripts -->
        <script src="js/jquery.min.js"></script>
        <script src="js/skel.min.js"></script>
        <script src="js/util.js"></script>
        <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
        <script src="js/main.js"></script>
        <script src="js/login.js"></script>
        <script type="text/javascript" src="js/jquery-ui.js"></script>
        <script type="text/javascript" src="js/dropzone.js"></script>
        <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
        <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
        <script src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>

        @yield('javascript')
    </head>
    <body class="landing">
        @yield('body')
    </body>
</html>

<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="en" role='main'>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body>
  <div id='app' role='application'></div>
  <?php wp_footer(); ?>
  <script type="text/javascript">
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
  <script defer src="https://connect.podium.com/widget.js#API_TOKEN=3ce11a45-65aa-4d0b-a753-e3a9dc1febdc" id="podium-widget" data-api-token="3ce11a45-65aa-4d0b-a753-e3a9dc1febdc"></script>
  <script src="https://onlineschedulingv2.threadcommunication.com" type="text/javascript"></script>
  <script type="text/javascript"> OpenChair.init({ token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnaW4iOiJlbGF0ZW9ydGhvZG9udGljcy5jb20iLCJwcmFjdGljZV9pZCI6IjMzNCJ9.9JbW9QH1McnjmtVsO2lV4ePa1kRvG1hSz5DTKmOGoRk", mainButtonLeft: true, }) </script>
</body>
</html>

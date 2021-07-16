<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="en" role='main'>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>

	<!-- Facebook Pixel Code -->
	<script>
		!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window, document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '2401702583464237');
		fbq('track', 'PageView');
	</script>
	<noscript><img height="1" width="1" style="display:none"
	src="https://www.facebook.com/tr?id=2401702583464237&ev=PageView&noscript=1"
	/></noscript>
	<!-- End Facebook Pixel Code -->
    
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

  <script type="text/javascript"> 
  (function(d){
    var s = d.createElement("script");
    s.setAttribute("data-account", "D3656BNpyD");
    s.setAttribute("src", "https://cdn.userway.org/widget.js");
    (d.body || d.head).appendChild(s);})(document);
 
  (function(d){
    var ns = d.createElement("noscript");
    ns.innerHTML = `Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website accessibility</a>`;
    (d.body || d.head).appendChild(ns);})(document);    
</script>

<div id="accessibilityWidget" tabindex="0">Click for Accessibility</div>
  
  </body>
</html>

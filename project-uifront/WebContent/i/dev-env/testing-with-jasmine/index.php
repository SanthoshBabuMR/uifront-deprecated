<?php
  
  $root = $_SERVER["DOCUMENT_ROOT"];
  include $root."/i/template/php-template/settings.php";
  # page settings
  $title = "Testing with jasmine";
  $meta = "
  ";
  $css = "
  <link rel=\"stylesheet\" href=\"$siteAsset/css/modules/videos.css\" />
  ";
  $script = "
  <script src=\"$siteAsset/script/lib/require.js\"></script>
  <script src=\"$pageAsset/script/page.js\"></script>
  ";
  $pageIdentifier= "";
  $articleHeading = "Testing with jasmine";
  $articlePubDate = "14 January 2014";
  
  
  
  include $root."/i/template/php-template/template.php";

?>

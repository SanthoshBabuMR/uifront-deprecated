<?php
  
  $root = $_SERVER["DOCUMENT_ROOT"];
  include $root."/i/template/php-template/settings.php";
  # page settings
  $title = "Brendan Eich";
  $meta = "
  ";
  $css = "
  <link rel=\"stylesheet\" href=\"$siteAsset/css/modules/videos.css$v\" />
  <link rel=\"stylesheet\" href=\"$pageAsset/css/page.css$v\" />
  ";
  $script = "
  <script src=\"$siteAsset/script/lib/require.js$v\"></script>
  <script src=\"$pageAsset/script/page.js$v\"></script>
  ";
  $pageIdentifier= "tech-gurus";
  $articleHeading = "Brendan Eich";
  $articlePubDate = "07 January 2014";
  
  
  
  include $root."/i/template/php-template/template.php";

?>

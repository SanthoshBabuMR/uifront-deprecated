<?php
  
  $root = $_SERVER["DOCUMENT_ROOT"];
  include $root."/i/template/php-template/settings.php";
  # page settings
  $title = "Brendan Eich";
  $meta = "
  ";
  $css = "
  <link rel=\"stylesheet\" href=\"$pageAsset/css/page.css\" />
  ";
  $script = "
  <script src=\"$siteAsset/script/lib/require.js\"></script>
  <script src=\"$pageAsset/script/page.js\"></script>
  ";
  $pageIdentifier= "tech-gurus";
  $articleHeading = "Brendan Eich";
  $articlePubDate = "07 January 2014";
  
  
  
  include $root."/i/template/php-template/template.php";

?>

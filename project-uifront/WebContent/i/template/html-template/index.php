<?php
  
  $root = $_SERVER["DOCUMENT_ROOT"];
  include $root."/i/template/php-template/settings.php";
  # page settings
  $title = "Page Title";
  $meta = "
  ";
  $css = "
  ";
  $script = "
  <script src=\"$siteAsset/script/lib/require.js\"></script>
  <script src=\"$pageAsset/script/page.js\"></script>
  ";
  $pageIdentifier= "";
  $articleHeading = "Article Heading";
  $articlePubDate = "20 January 1970";
  
  
  
  include $root."/i/template/php-template/template.php";

?>

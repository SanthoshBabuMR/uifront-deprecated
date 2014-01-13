<?php

$root = $_SERVER['DOCUMENT_ROOT'];

# read config json (this is a relative path; hence it must handled when folder structure changes)
$config = json_decode( file_get_contents( $root."/i/config/config.json" ), true );

# read page json (this is a relative path; hence it must handled when folder structure changes)
$pageConfig = json_decode( file_get_contents( $root."/i/config/page.json" ), true );

# set meta data
$name          = $config["name"];
$description   = $config["description"];
$keywords      = $config["keywords"];
$author        = $config["author"];

# set path for minified and non-minified asset
if($pageConfig["debug"] == 1) {
	$siteAsset = $config["siteAsset"];
	$pageAsset = $config["pageAsset"];
}
else {
	$siteAsset = $config["siteAssetMin"];
	$pageAsset = $config["pageAssetMin"];
}

# cache busting
$cacheBusting = $config["cacheBusting"];
if($cacheBusting == 1) {
	$v = "?v=".date_format(date_create(), 'ymdhis');
}
else {
	$v = "";
}


# uncomment below to test for errors
#echo "debug : ".$pageConfig["debug"];
#echo "<br />";
#echo "site : ".$name;

?>

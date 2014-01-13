
  <script>
	window.site = {};
    <?php # set site wide asset path for debugging ?>
    site.siteAsset = "<?php echo $siteAsset; ?>";
	  <?php # set page level asset path for debugging ?>
	  site.docAsset = "<?php echo $pageAsset; ?>";
	  <?php #set cache busting ?>
	  site.cacheBust = "<?php echo $v; ?>";
  </script>

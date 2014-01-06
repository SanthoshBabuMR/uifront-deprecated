<body class="<?php echo $pageIdentifier ?>">
  <div class="doc-wrap">
  <!-- doc-wrap begin -->
    
	<?php include "header.php"; ?>
	<section class="site-content">
    <!-- site-content begin -->
      <div class="container">
      <!-- container begin -->
        
        <div class="page-header">
        <!-- page-header begin -->
          <h1><?php echo $articleHeading?></h1>
          <span class="pubdate"><?php echo $articlePubDate?></span>
        <!-- page-header end -->
        </div>
        
        <div class="page-content">
          <!-- page-content begin -->
          <?php include "content.php"; ?>
          <!-- page-content end -->
        </div>
        
      <!-- container end -->  
      </div>
    <!-- site-content end -->
    </section>
    <?php include "footer.php"; ?>
		
  <!-- doc-wrap end -->
  </div>
  <?php echo $script; ?>
</body>

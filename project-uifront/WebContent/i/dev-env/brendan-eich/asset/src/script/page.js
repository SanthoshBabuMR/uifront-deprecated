require.config({
  
});

require(['jquery', 'global', 'picturefill'], function($, Global, Picturefill){
  $(document).ready(function(){
    Picturefill.paint();
  });
});
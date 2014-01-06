require(['jquery','elements'],function($, el){
  
  $(document).ready(function(){
  
    // toggle site-navigation for mobile and tablet device(s)
    $(el.site_navigation_container).on("click", el.nav_hook, function(event) {
      //$(event.delegateTarget).toggleClass("show-nav");
      if($(el.site_nav).css('height') != "0px") {
        $(el.site_nav).css('height', "0px");
      }
      else {
        $(el.site_nav).css('height', $(el.site_nav).children.length * 39 + 'px');
      }
    });
    
  }); 
  
});
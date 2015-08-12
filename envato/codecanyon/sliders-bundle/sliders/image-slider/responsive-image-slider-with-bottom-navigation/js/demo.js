/* ==============================================================

   Author: UDX
   Author URL: http://codecanyon.net/user/UDX
   Plugin: 23 Sliders Bundle - Mega Pack
   Plugin URL: #
   Version: 1.0

   ============================================================== */
$(function(){
  var toggles = $('.toggle a'),
      codes = $('.code');
  
  toggles.on("click", function(event){
    event.preventDefault();
    var $this = $(this);
    
    if (!$this.hasClass("active")) {
      toggles.removeClass("active");
      $this.addClass("active");
      codes.hide().filter(this.hash).show();
    }
  });
  toggles.first().click();
});
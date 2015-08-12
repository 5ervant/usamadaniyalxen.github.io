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
 $('.prev').on('click', function(){
    $('#slider').flexslider('prev')
	callLen();
    return false;
 })

 $('.next').on('click', function(){
    $('#slider').flexslider('next')
	callLen();
    return false;
})

function callLen(){ 
var index = $('#slider ul.slides li.flex-active-slide').index();
var total = $('#slider ul.slides li').length;
if(index+1 != total || index+1 !=1){$('#prev').show();$('#next').show();}
if(index+1 == total){ $('#next').hide(); $('#prev').show();}
if(index+1 == 1){ $('#prev').hide();$('#next').show();}
}

  
  
  
});
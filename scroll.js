$(document).ready(function(){
$("li a").click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
}); 

	// grab the initial top offset of the navigation 
    var stickyNavTop = $('.nav').offset().top;
		   	
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
     var scrollTop = $(window).scrollTop(); // our current vertical position from the top
          
     // if we've scrolled more than the navigation, change its position to fixed to stick to top,
     // otherwise change it back to relative
     if (scrollTop > stickyNavTop) { 
         $('.nav').addClass('sticky');
     } else {
         $('.nav').removeClass('sticky'); 
     }
 };

 stickyNav();
 // and run it again every time you scroll
 $(window).scroll(function() {
     stickyNav();
 });

 $("#bt1").click(function(){

    $("#fade").fadeToggle(1000);
  });
  
  $("#bt2").click(function(){
    $("#slide").slideToggle(5000);
  });

  $("#bt3").click(function(){
    $("#slide").stop();
  });

});
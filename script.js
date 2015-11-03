$(document).ready(function() {

  $('#menu li').mouseenter(function() {

    $(this).find('ul').slideDown();
    
    
    $(this).mouseleave(function(){
      
      $(this).find('ul').slideUp();
      
    });
  });




});

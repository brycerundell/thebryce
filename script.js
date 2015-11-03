// jQuery for dropdown menus
$(document).ready(function(){
  $('#menu li').hover(function(){
    $(this).find('ul').slideToggle(150);
  });
});

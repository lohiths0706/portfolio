$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle')
  });
  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('hader').removeClass('toggle');
  })
  $('a[herf*="#"}').click(function(e){
     e.preventDefault();
     $('html,body').animate({
       scrollTop:$($(this).after('href')).offset().top,
     },
     500,
     'linear'
     );
  });
});
jQuery(function($){
   $("#phone").mask("+7 (999) 999-9999");
   $("#footer_phone").mask("+7 (999) 999-9999");
   $("#home_phone").mask("+7 (999) 999-9999");
   $("#modal_phone").mask("+7 (999) 999-9999");
});

$(function(){
// открывает модальное окно знакомиться
  $ ('.header_button').click(function(){
    $('#exampleModal1').arcticmodal();
  });
  // открывает модальное окно знакомиться
  $ ('.diagnostics_button').click(function(){
    $('#exampleModal1').arcticmodal();
  });
  $ ('.footer_wrap_btn').click(function(){
    $('#exampleModal1').arcticmodal();
  });
  $ ('.stage_button').click(function(){
    $('#exampleModal1').arcticmodal();
  });
   ('.btn').click(function(){
    $('#exampleModal1').arcticmodal();
  });
});

$('.rev_slider').slick({
  infinite: true,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
   arrows: true,
  centerMode: true,
  focusOnSelect: true
});
  	

$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '320px',
  centerMode: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1884,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '270px',
      }
    },
    {
      breakpoint: 1820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 1530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '80px',
      }
    },
{
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px',
      }
    },
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         centerPadding: '0px',
      }
    }
 


  ]
});


new WOW().init();    
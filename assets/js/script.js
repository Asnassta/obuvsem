function tabs(n)
{
   	$('.catalog .tabs-nav a').removeClass('active');
	$('.catalog .tabs-nav a.t'+n).addClass('active');
	$('.catalog .tabs-block').fadeOut(0);
	$('.catalog .tabs-block.tab_'+n).fadeIn(222);
};

function tabsAbout(n)
{
   	$('.about .tabs-nav a').removeClass('active');
	$('.about .tabs-nav a.t'+n).addClass('active');
	$('.about .tabs-block').fadeOut(0);
	$('.about .tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
/*=========Catalog=========*/
  $(".btn-catalog").on("click", function() {
    $(this).find(".burger").toggleClass("active");
    $(".header__catalog").slideToggle();
  });
 /*=========/catalog=========*/

 /*=========Mobile-menu=========*/
  $(".burger-mobile").on("click", function() {
    $(this).toggleClass("active");
    $(".mobile-menu").slideToggle();
  });
 /*=========/mobile-menu=========*/

 /*=========Filters=========*/
  $(".filters__header").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });

  $(".filters__more-link").on("click", function(event) {
  	event.preventDefault();
    $(this).prev().find(".filters__more").slideToggle();
  });

  $(".open-filters").on("click", function(event) {
  	event.preventDefault();
    $(".filters").slideToggle();
  });
 /*=========/filters=========*/

 /*=========Favorite=========*/
  $(".product__favorite").on("click", function(event) {
  	event.preventDefault();
    $(this).toggleClass("active");
  });
 /*=========/favorite=========*/

  /*=========Reviews=========*/
  $(".reviews-rating__btn").on("click", function(event) {
  	event.preventDefault();
    $(this).toggleClass("active");
    $(".reviews-rating__btn").not(this).removeClass("active");
  });
 /*=========/reviews=========*/

   /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

 /*===========Range=============*/
    $( "#slider-range_price" ).slider({
      range: true,
      min: 0,
      max: 40000,
      values: [ 500, 35500 ],
      slide: function( event, ui ) {
        $('#range-from').val(ui.values[ 0 ]);
        $('#range-until').val(ui.values[ 1 ]);
 
      }
    });
 /*===========/range=============*/

 /*===========Slider========*/
 $('.intro__slider').slick({
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.intro .arrows-circle__arrow_prev'),
  nextArrow: $('.intro .arrows-circle__arrow_next'),
  dots: true,
  });

 $('.product_best .product__slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.product_best .arrows-rect__arrow_prev'),
  nextArrow: $('.product_best .arrows-rect__arrow_next'),
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 851,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  });

 $('.product_stock .product__slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.product_stock .arrows-rect__arrow_prev'),
  nextArrow: $('.product_stock .arrows-rect__arrow_next'),
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 851,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  });

 $('.product_same .product__slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.product_same .arrows-rect__arrow_prev'),
  nextArrow: $('.product_same .arrows-rect__arrow_next'),
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 851,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  });

 $('.product_looked .product__slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.product_looked .arrows-rect__arrow_prev'),
  nextArrow: $('.product_looked .arrows-rect__arrow_next'),
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 851,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  });

 $('.product__photo-slider').slick({
  infinite: true,
  fade: true,
  arrows: false,
  swipe: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  });

 $('.brands__slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: $('.brands .arrows-rect__arrow_prev'),
  nextArrow: $('.brands .arrows-rect__arrow_next'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
  ]
  });

 $('.news__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  });

 $('.product-box-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-box-slider-nav',
  });


$('.product-box-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-box-slider-for',
  centerMode: false,
  focusOnSelect: true,
  prevArrow: $('.product-box .slider-nav__arrow_prev'),
  nextArrow: $('.product-box .slider-nav__arrow_next'),
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 761,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
  ]
  });
 /*===========/slider========*/
});

  /*=========Scroll=========*/
  window.onload = function () {
          var scr = $(".section__nav");
          scr.mousedown(function () {
              var startX = this.scrollLeft + event.pageX;
              var startY = this.scrollTop + event.pageY;

              scr.mousemove(function () {

                  this.scrollLeft = startX - event.pageX;

                  this.scrollTop = startY - event.pageY;

                  return false;

              });

          });

          $(window).mouseup(function () {
              scr.off("mousemove");
          });
      }

  /*=========/Scroll=========*/
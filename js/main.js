$( document ).ready(function() {
  $('.top-slider').slick({
    // nextArrow: '<p class="prevArrow-slick"> > </p>',
    nextArrow: '<i class="fa fa-chevron-circle-right nextArrow-slick" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-chevron-circle-left prevArrow-slick" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'slick-dots',
  });
  $('.new-shop__slider').slick({
    // nextArrow: '<p class="prevArrow-slick"> > </p>',
    nextArrow: '<i class="fa fa-chevron-circle-right nextArrow-slick" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-chevron-circle-left prevArrow-slick" aria-hidden="true"></i>',
    dotsClass: 'slick-dots',
    slidesToShow: 3,

  });
});

$( document ).ready(function() {
  $('.top-slider').slick({
    // nextArrow: '<p class="prevArrow-slick"> > </p>',
    nextArrow: '<i class="fa fa-chevron-circle-right nextArrow-slick" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-chevron-circle-left prevArrow-slick" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
  $('.new-shop__slider').slick({
    // nextArrow: '<p class="prevArrow-slick"> > </p>',
    nextArrow: '<i class="fa fa-chevron-circle-right nextArrow-slick" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-chevron-circle-left prevArrow-slick" aria-hidden="true"></i>',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
  ]
  });
});

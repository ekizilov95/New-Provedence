function slider() {
  $(document).ready(function () {
    $('.slider-img__wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: 1,
      variableWidth: true,
      asNavFor: '.slider-content__wrapper',

    });
  });


  $(document).ready(function () {
    $('.slider-content__wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-img__wrapper',

    });
  });

}

export default slider;
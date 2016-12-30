var installPagesContentSliders = (function () {
  var $contentSlider = $('.responsive.install-pages-content-sliders');
  var sliderParam = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 6,
          arrows: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          rows: 6,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          rows: 3,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  $contentSlider.slick(sliderParam);
  return {
    "sliderParams":sliderParam
  };
})();
// $('.responsive.install-pages-content-sliders').slick(installPagesContentSliders);
$('.responsive.install-pages-content-sliders').slick(installPagesContentSliders.sliderParams);


var carServices = (function () {
  var $contentSlider = $('.responsive.car-service-content-slider');
  var sliderParam = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 360,
        settings: {
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  $contentSlider.slick(sliderParam);
  $('.car-services-switch').bootstrapToggle({
          on: 'İleri Tarih',
          off: 'Hemen'
  });
  $('#car-service-datepicker').datebox({
      mode: "flipbox",
      useInline:true,
      useInlineAlign:"center"
  });
  $('#car-service-timepicker').datebox({
      mode: "timeflipbox",
      defaultValue:"18:35", 
      showInitialValue:true, 
      useInline: true,
      useInlineAlign:"center"
  });
  // $('#time-select-toggle').change(function(){
  //   if($('#time-select-toggle').prop('checked')==true){
  //     $('.car-service-picker-content').addClass('hidden');
  //   }else{
  //     $('.car-service-picker-content').removeClass('hidden');
  //   }
  // });
  var switchControl= $("#time-select-toggle").parent();
  $(switchControl).on("click", function() {
      $(".car-service-picker-content").slideToggle({
            duration: 'slow',
            step: function() {
                if ($(this).css('display') == 'block') {
                    $(this).css('display', 'inherit');
                    $(".input-group-addon").trigger("click");
                }
            },
            complete: function() {
                if ($(this).css('display') == 'block') {
                    $(this).css('display', 'inherit');
                }
            }
        });
  });
  
})();



/*bulb-light slider*/
var lightSliders = (function(){
      var lightSliderSettings={
            start: 5,
            behaviour: 'snap',
            connect: [true, false],
            range: {
                  'min': 0,
                  'max': 100
            }
      };
      var $lightSliders =  $('.light-slider');
      
      for (var i = $lightSliders.length - 1; i >= 0; i--) {

            var slider = $lightSliders[i];
            noUiSlider.create(slider,lightSliderSettings);

            slider.noUiSlider.on('change.one', function (val) { console.log(val) });

            /*bulb toggle no-slider*/
            if ($('bulb-toggle')) {
                  $('#bulb-icon-' + i).on("click", function () {
                        $(this).parent().toggleClass('open');
                        $(this).parent().find('.button-wrap').toggleClass('button-active');
                  });
            }
      }
})();
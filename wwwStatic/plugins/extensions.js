noUiSlider.createMulti = function(sliders, options){

  var that = this;
    
  for(var i=0; i < sliders.length; i++){
    that.create(sliders[i], options);    
  }
}

var $ = require("jquery"),
	r = require('router'),
	HomeComponent = require('../components/home/home-component');

r.addRoute('', function() {
		var homeComponent = new HomeComponent();
		$('#app').html(homeComponent.render());

});

r.addRoute('traffic', function() {
    $('body').html("trafficView");
});

r.addRoute('weather', function() {
    $('body').html("weatherView");
});

r.addRoute('finance', function() {
    $('body').html("financeView");
});

r.start();

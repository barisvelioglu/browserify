var $ = require("jquery"),
	r = require('router'),
	HomeView = require('../views/home/home-view');

r.addRoute('', function() {
	var homeView = new HomeView();
    $('#app').html(homeView.render());
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
require('slick');

var BaseView = require('../common/base-view.js');
var template = require('../../templates/control-home/control-home-tpl.hbs');

var controlHomeView = function(value){
	
	this._renderHTML = function() {
		this.$view.html(template(value));
	    return this.$view;
	};

	this._init = function(){		
		
	};

	this._destroy = function(){

	};

	BaseView.call(this);

};

controlHomeView.prototype = BaseView.prototype;
controlHomeView.prototype.constructor = controlHomeView;

module.exports = controlHomeView;
require('slick');

var BaseComponent = require('../common/base-component.js');
var template = require('../../templates/control-home/control-home-tpl.hbs');

var controlHomeComponent = function(value){

	this._renderHTML = function() {
		this.$view.html(template(value));
	    return this.$view;
	};

	this._init = function(){

	};

	this._destroy = function(){

	};

	BaseComponent.call(this);

};

controlHomeComponent.prototype = BaseComponent.prototype;
controlHomeComponent.prototype.constructor = controlHomeComponent;

module.exports = controlHomeComponent;

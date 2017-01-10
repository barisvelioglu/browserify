"use strict";

function baseComponent($view, name){
	this.$view = $view || $('<div/>');
	this.$view = $('<div/>');
}

baseComponent.prototype.render = function(){

	var that = this;

	setTimeout(function(){

		that._init();

		that.$view.bind('destroyed', function() {
			that._destroy();
		});

	}, 0);

	return this._renderHTML();
}

module.exports = baseComponent;

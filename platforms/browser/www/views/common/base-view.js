"use strict";

function baseView($view, name){
	this.$view = $view || $('<div/>');
	this.$view = $('<div/>');
}

baseView.prototype.render = function(){
	
	var that = this;

	setTimeout(function(){

		that._init();
		
		that.$view.bind('destroyed', function() {
			that._destroy();
		});

	}, 0);

	return this._renderHTML();
}

module.exports = baseView;
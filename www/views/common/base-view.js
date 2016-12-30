"use strict";

class BaseView {

	constructor($view, model){
		this.$view = $view || $('<div/>');
		this.model = model;

		if(!this._renderHTML){
			var errorMessage = "Please implement _renderHTML method on " + this.constructor.name;
			console.error(errorMessage)
			throw new Error(errorMessage);
		}

		if(!this._init){
			var errorMessage = "Please implement _init method on " + this.constructor.name;
			console.error(errorMessage)
			throw new Error(errorMessage);
		}

		if(!this._destroy){
			var errorMessage = "Please implement _destroy method on" + this.constructor.name;
			console.error(errorMessage)
			throw new Error(errorMessage);
		}
	}

	render(){

		var that = this;

		setTimeout(function(){
			that._init();
			that.$view.bind('destroyed', function() {
				that._destroy();
			});
			
		}, 0);
	
		return that._renderHTML();
	}

}

module.exports = BaseView;
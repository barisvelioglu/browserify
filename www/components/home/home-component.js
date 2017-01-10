require('slick');

var BaseComponent = require('../common/base-component.js');
var template = require('../../templates/home/home-tpl.hbs');
var sceneStore = require('../../stores/scene-store.js');

var homeComponent = function(value){

	this._renderHTML = function() {
		var scenes = sceneStore.getAll();
		console.log(scenes)
		this.$view.html(template({scenes : scenes}));
		return this.$view;
	};

	this._init = function(){
		this.$view.on("click", "#scenes li", _callScene);
		this.$view.on("click", "#alarms li", _callAlarm);

		_runSlider();
	};

	this._destroy = function(){
		socket.off("get:notification", _getNotification);
	};

	BaseComponent.call(this);

	function _getNotification(message){
		var $notification = $("#notification");

		$notification.fadeOut(1000, function(){
			$notification.fadeIn(1000);
			$notification.html(message);
		});
	}

	function _callScene(){
		var sceneId = $(this).data("id");
		socket.emit("call:scene", sceneId);
	}

	function _callAlarm(){
		var alarmId = $(this).data("id");
		socket.emit("call:alarm", alarmId)
	}

	function _runSlider(){

		var $contentSlider = $('.responsive.mainpage-content-slider');

		var sliderParam = {
			dots: true,
			infinite: true,
			speed: 10,
			slidesToShow: 4,
			slidesToScroll: 4,
			rows: 2,
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
			      rows: 4,
			      slidesToShow: 2,
			      slidesToScroll: 2
			    }
			  },
			  {
			    breakpoint: 360,
			    settings: {
			      rows: 3,
			      slidesToShow: 2,
			      slidesToScroll: 2
			    }
			  }
			]
		};

		$contentSlider.slick(sliderParam);

	}

};

homeComponent.prototype = BaseComponent.prototype;
homeComponent.prototype.constructor = homeComponent;

module.exports = homeComponent;

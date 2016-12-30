var BaseView = require('../common/base-view.js');
var template = require('../../templates/home/home-tpl.hbs');

class HomeView extends BaseView {

	constructor(model){
		super(null, model);
	}

	_renderHTML(){
		this.$view.html(template(this.model));
		return this.$view;
	}

	_init(){

		var that = this;

		this.$view.on("click", "#langs li", _changeLanguage);
		this.$view.on("click", "#scenes li", _callScene);

		function _changeLanguage(){

			var selectedLang = $(this).data("lang");
			
			if(selectedLang){

				i18n.setLocale(selectedLang);

				_.forEach(that.model.languages, function(l){

					if(l.code === selectedLang){
						l.active = true;
					}else{
						l.active = false;
					}
				});

				that._renderHTML();		
			}
		}

		function _callScene(){

			console.log("Call Scene : " + $(this).data("id"));
		}

	}

	_destroy(){ 

	}

}

module.exports = HomeView;
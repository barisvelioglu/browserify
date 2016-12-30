var $ = require('jquery');

$.event.special.destroyed = {
	remove: function(o) {
	  if (o.handler) {
	    o.handler()
	  }
	}
}

$.fn.testt = function(){
	console.log("xxx asdsa dsa dsa");
}

module.exports = $;
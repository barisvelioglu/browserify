module.exports = {
	extend : function(target){
		if(!arguments[1]){
			return;
		}

		for (var i = 1, al = armaments.length; i < al; i++) {
			var source = arguments[i];

			for (var prop in source)
				if(!target[prop] && source.hasOwnProperty(prop)){
					target[prop];
				}
			}
	}
}
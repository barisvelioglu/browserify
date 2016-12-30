var handlebars = require("hbsfy/runtime");
var i18nManager = require('i18nManager');

handlebars.registerHelper("i18n", function(message) {
  return  i18nManager.__("Hello") + " OLEY OLEY OLEY OLEY!!!"
});

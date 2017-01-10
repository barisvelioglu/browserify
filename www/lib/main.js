require('jquery-extensions');
require('handlebars-extensions');
require('helpers');
require('bootstrap');
require('jqueryui');
require('../stores/scene-store.js');

setTimeout(function(){
  //todo barisv fix this
  //burada uygulama ilk kez açılırken loading ikonu yapalım ve flashlanmayı engelleyelim...
  require('routeManager');
}, 1000);

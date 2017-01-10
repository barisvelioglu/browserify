var $ = require("jquery")
var r = require('router');

r.addRoute('import', function() {
    $('body').html("import ");
});

r.addRoute('import-step1', function() {
    $('body').html("step1");
});

r.addRoute('import-step2', function() {
    $('body').html("step2");
});

r.addRoute('import-step3', function() {        
    $('body').html("step3");
});

r.addRoute('import-step4', function() {        
    $('body').html("step4");
});

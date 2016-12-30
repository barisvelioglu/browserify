var I18n = require('i18n');

var i18n = new I18n({
    directory: "./locales",
    locale: "tr-TR",
    extension: ".json"
}); 

function setLanguage(lang){
	i18n.setLocale(lang);
}

function translate(message){
	return i18n.__(message);
}

module.exports = {
	__ : translate,
	setLanguage : setLanguage
}
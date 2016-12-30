var masterModule = (function(){

    function read_cookie(k,r){return(r=RegExp('(^|; )'+encodeURIComponent(k)+'=([^;]*)').exec(document.cookie))?r[2]:null;}

    var i18n = new I18n({
        //these are the default values, you can omit
        directory: "/locales",
        locale: read_cookie("i18nSettings"),
        extension: ".json"

    });

    return {
        i18n : i18n
    }
    
})();


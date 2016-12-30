$("#suggestion-add").on("click", function() {
    $(".suggestion-add-content").slideToggle();
});

/*table detail button script */
var window = $(window).width();
$(".detail-btn").parents("tr").css({
    "margin-bottom":".625em"
});
$(".detail-btn").on("click", function() {
    var buttonId=this.id;
    var slideTableRow = $(this).parents("tr");
    var slideDetailTableRow= $(this).parents("tr.table-detail-row");
    if($(window).width() <= 600){
        $(this).parents("tr").css({
            "margin":"0 auto"
        });
        $(slideTableRow).next().toggle(function(){
            $(this).prev().css({
                "margin":"0 auto"
            });
        });
    }else{
        $(slideTableRow).next().toggle(function(){
            $(this).prev().css({
                "margin-bottom":".625em"
            });
        });
    }
});

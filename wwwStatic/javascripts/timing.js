$(document).ready(function () {
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });
    var tp = 1 ;
    document.querySelectorAll('.time-selector')[0].scrollTop = tp;
});

function control(){
    var swipePicker=$('.timing-time-picker');
    var el=$(".btn-select-light").find("ul li")[0];
    if($(el).hasClass("selected") && el.outerText != "Sabit Zaman"){
        $('.day-status').addClass("hidden");
        $('.time-status').addClass("hidden");
        $(swipePicker).removeClass("hidden");
    }else{
        $('.day-status').removeClass("hidden");
        $('.time-status').removeClass("hidden");
        $(swipePicker).addClass("hidden");
    }
}

$(document).on('click', '.btn-select', function (e) {
    
    e.preventDefault();
    var ul = $(this).find("ul");
    if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
            var target = $(e.target);
            target.addClass("selected").siblings().removeClass("selected");
            var value = target.html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
        ul.hide();
        $(this).removeClass("active");
    }
    else {
        $('.btn-select').not(this).each(function () {
            $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
    }
    var el=$(".btn-select-light").find("ul li")[0];
    if(el.outerText != "Sabit Zaman"){
        control();
    }
});

$(document).on('click', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});

/*remove list */
$(".removable-item").on("click", function(){
var $killrow = $(this).parents("tr");
    $killrow.addClass("danger");
    $killrow.fadeOut(1000, function(){
        $(this).remove();
    });
    console.log($killrow);
});



 
/*scroll selector*/
function SetHour(hr) {
  setIfPresent(document.querySelectorAll('.time-selector li')[hr+2], 'active');
  setIfPresent(document.querySelectorAll('.time-selector li')[hr+3], 'fade');
  setIfPresent(document.querySelectorAll('.time-selector li')[hr+1], 'fade');
  setIfPresent(document.querySelectorAll('.time-selector li')[hr+4], 'fader');
  setIfPresent(document.querySelectorAll('.time-selector li')[hr], 'fader');
  
}


function moveHour(hr) {
  var tp = hr.scrollTop;
  var ind = Math.floor((tp + 24) / 48) + 2;
  
   var d = document.querySelectorAll('.time-selector li');
   setIfPresent(document.querySelectorAll('.time-selector li.active')[0], '');
   setIfPresent(document.querySelectorAll('.time-selector li.fade')[0], '');
   setIfPresent(document.querySelectorAll('.time-selector li.fade')[0], '');
   setIfPresent(document.querySelectorAll('.time-selector li.fader')[0], '');
   setIfPresent(document.querySelectorAll('.time-selector li.fader')[0], '');
   console.log(ind)
   setIfPresent(d[ind], 'active');
   setIfPresent(d[ind-1], 'fade');
   setIfPresent(d[ind+1], 'fade');
   setIfPresent(d[ind-1], 'fader');
   setIfPresent(d[ind+2], 'fader');
   if (scrollTimer != -1)
      clearTimeout(scrollTimer);
   scrollTimer = window.setTimeout(function(){
      document.querySelectorAll('.time-selector')[0].scrollTop = (ind-2)*48;
   }, 200);
}
var scrollTimer = -1;
function setIfPresent(elem, cls) {
    if(typeof elem !== 'undefined') {
        elem.className = cls;
    }
}


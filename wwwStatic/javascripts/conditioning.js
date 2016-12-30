/*target scroll */
// function SetTarget(target) {
//   setIfPresent(document.querySelectorAll('.target-scroll-content li')[target + 2], 'active');
//   setIfPresent(document.querySelectorAll('.target-scroll-content li')[target + 3], 'fade');
//   setIfPresent(document.querySelectorAll('.target-scroll-content li')[target + 1], 'fade');
//   setIfPresent(document.querySelectorAll('.target-scroll-content li')[target - 4], 'fader');
//   setIfPresent(document.querySelectorAll('.target-scroll-content li')[target], 'fader');

// }
// var scrollTarget = -1;
// function moveTarget(target) {
//   var tp = target.scrollTop;
//   var ind = Math.floor((tp + 24) / 48) + 2;

//   var d = document.querySelectorAll('.target-scroll .target-scroll-content li');

//   setIfPresent(document.querySelectorAll('.target-scroll .target-scroll-content li.active')[0], '');
//   setIfPresent(document.querySelectorAll('.target-scroll .target-scroll-content li.fade')[0], '');
//   setIfPresent(document.querySelectorAll('.target-scroll .target-scroll-content li.fade')[0], '');
//   setIfPresent(document.querySelectorAll('.target-scroll .target-scroll-content li.fader')[0], '');
//   setIfPresent(document.querySelectorAll('.target-scroll .target-scroll-content li.fader')[0], '');

//   setIfPresent(d[ind], '.target-scroll active');
//   setIfPresent(d[ind - 1], '.target-scroll fade');
//   setIfPresent(d[ind + 1], '.target-scroll fade');
//   setIfPresent(d[ind - 1], '.target-scroll fader');
//   setIfPresent(d[ind + 2], '.target-scroll fader');
  

// }

// function setIfPresent(elem, cls) {
//   if (typeof elem !== 'undefined') {
//     elem.className = cls;
//   }
// }
$('#target-picker').datebox({
    mode:"durationflipbox",
      defaultValue:"12", 
      showInitialValue:true, 
      useInline: true,
      useInlineAlign:"center"
  });
/* jQuery(document).ready(function() {
  jQuery(function($) {
    $('.page-node #content form input').superLabels({
      duration:200,
    });
    $('.page-panels #content form input').superLabels({
      duration:200,
    });
  });
});
*/
jQuery(window).ready(function() {
/*  jQuery(function($) {
    $("#carousel").carouFredSel({
      width       : "100%",
      scroll      : {
        fx          : "crossfade"
      },
      items       : {
        visible     : 1,
        width       : 640,
        height      : 320
      }
    });
  }); 
  jQuery("#carousel").carouFredSel({
    height: 320,
    align: "left",
    width: 1280,
    items: {
      width: 1280,
      height: 320
    },
    scroll: {
      easing: "linear",
      fx: "crossfade"
    },
    auto: {
      timeoutDuration: 5000,
      delay: 1000
    }
  });*/
  jQuery('#carousel').cycle({
    timeout:7000
  });
});

$(window).on("load",function() {
  $(window).scroll(function() {
    $(".scroll-fade").each(function() {
      var objectTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      if (windowBottom > objectTop + 200) {
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      }
    });
  }); $(window).scroll();
});
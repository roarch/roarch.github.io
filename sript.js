
  $(function() {
    var mouseY = 0;

    document.addEventListener('mousemove', function(e) {
      mouseY = e.clientY || e.pageY;
      if(mouseY < 70) {
         $('nav').css({ top: '0' });
      }
    }, false);

    $(window).scroll(function() {
      var sc = ($(this).scrollTop() > 70) ? $('nav').css({ top: '-70px' }) : $('nav').css({ top: '0' });
    });

    $('nav').mouseout(function() {
      if($(window).scrollTop() > 70) {
         $('nav').css({ top: '-70px' });
      }
    });
  });



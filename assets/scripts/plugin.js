;(function($) {

  /* MANAGE RESPONSIVE JS
  --------------------------------------------------------------------------- */

  jRes = jRespond([
    {
      label: 'mobile',
      enter: 0,
      exit: 767
    },{
      label: 'tablet',
      enter: 768,
      exit: 991
    },{
      label: 'laptop',
      enter: 992,
      exit: 1199
    },{
      label: 'desktop',
      enter: 1200,
      exit: 10000
    }
  ]);

  // // usage example
  // $(function() {
  //   if (jRes.getBreakpoint() == 'mobile') {
  //     console.log('mobile breakpoint');
  //   } else {
  //     console.log('not the mobile breakpoint');
  //   }
  // });

  // // usage example
  // jRes.addFunc([
  //   {
  //     breakpoint: 'mobile',
  //     enter: function() {
  //       console.log('enter mobile');
  //     },
  //     exit: function() {
  //       console.log('exit mobile');
  //     }
  //   },{
  //     breakpoint: ['desktop','laptop'],
  //     enter: function() {
  //       console.log('enter desktop or laptop');
  //     },
  //     exit: function() {
  //       console.log('exit desktop or laptop');
  //     }
  //   }
  // ]);

  /* WINDOW PROPERTY
  --------------------------------------------------------------------------- */

  viewport = function() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
  };

  /* PRELOAD IMAGES
  --------------------------------------------------------------------------- */

  $.fn.preload = function() {
    this.each(function(){
      $('<img/>')[0].src = this;
    });
  };

  // // usage example
  // var img = [base_theme_img_url +'example.gif'];
  // $(img).preload();

  /* USER AGENT
  --------------------------------------------------------------------------- */

  var userAgent = navigator.userAgent.toLowerCase();
  $.browser = {
      version: (userAgent.match( /.+(?:rv|it|ra|ie|me)[/: ]([d.]+)/ ) || [])[1],
      chrome: /chrome/.test( userAgent ),
      safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
      opera: /opera/.test( userAgent ),
      msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
      mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
  };

  // // usage example
  // $(function() {
  //   bodyelem = ($.browser.chrome || $.browser.safari) ? $('body') : $('html,body') ;
  //   bodyelem.animate({scrollTop: 0}, 600, 'swing');
  // });

})(jQuery);

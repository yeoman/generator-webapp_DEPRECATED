/* jshint ignore: start */
/* jshint ignore: end */
(function(){
	'use strict';
	$(function(){
		console.log('Allo allo!');

    var $embed = $('#embed');
    $('.embedLink,.close').on('click',function(e) {
      e.preventDefault();
      if ($embed.hasClass('visible')) {
        $embed.animate({bottom:'-200px'},'slow').fadeOut({queue:false}).removeClass('visible');
      } else {
        $embed.animate({bottom:'0px'},'slow').fadeIn({queue:false}).addClass('visible');
      }
    });
  });
})();
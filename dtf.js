/*!
 * DTF aka DOWN TO FADE
 * Copyright (c) 2012 Scott Tolinski
 * Version: 1.0 (22-MAR-2012)
 * Dual licensed under the MIT and GPL licenses.
 * Requires: jQuery v1.3.2 or later
 */


(function($) {
	$.fn.dtf = function(options) {

		var defaults = { 
			delay: 500,
			fadeTime:500
		};
		var options = $.extend(defaults, options);
		
		this.css( "display", "none" )
		var cells = this.toArray();
		for (var i = 0; i < cells.length; i++) {
			var time = options.delay * (i + 1);
			var cur = cells[i]; 
			$(cur).addClass ("item" + i);
			setTimeout(function() {
				yoo(cells.length,options.fadeTime)
			}, time);
		}
	};
	var f = 0;
	function yoo(item, ft){
		var fader = ".item" + f;
		$(fader).fadeIn(ft);
		f++;   
	};
})(jQuery);

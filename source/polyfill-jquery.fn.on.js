( function ( $, window ) {

	var plugin;

	if ( $ && $.fn && !$.fn.on ) {
		plugin = {
			name : 'on',
			code : function () {
				var args = Array.prototype.slice.call(arguments),
					events,
					selector,
					handler;

				if ( 'function' === typeof args[2] ) { // $('body').on('mousdown', '.className', handler);
					events   = args[0];
					selector = args[1];
					handler  = args[2];
				}
				else if ( 'function' === typeof args[1] ) { // $('.className').on('mousdown', handler);
					events   = args[0];
					handler  = args[1];
				}

				if ( 'string' !== typeof events ) {
					throw new TypeError('eventType must be a string');
				}
				else {
					events = events.split(' ');
				}

				if ( selector && 'string' !== typeof selector ) {
					throw new TypeError('selector must be a string');
				}

				if ( !handler ) {
					throw new TypeError('handler must be a function');
				}

				return this.each(function ( index, element ) {
					
					$.each(events, function  ( index, eventType) {
						if ( selector ) {
							$(element).delegate( selector, eventType, handler );
						}
						else {
							$(element).bind( eventType, handler );
						}
					});

				});
			}
		};

		$.fn[plugin.name] = plugin.code;
	}

})( window.jQuery, window );
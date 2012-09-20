/*!
 * CooQuery v3.2
 * https://github.com/lenon/CooQuery
 *
 * Copyright 2009-2012 Lenon Marcel
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 28-06-2012 (June 28, 2012)
 */
(function(window){
    var cookie = {
        set : function(name, value, opts) {
            opts = opts || {};

            var line = name + '=' + encodeURIComponent(value);

            if (opts.domain)
                line += '; domain=' + opts.domain;

            if (opts.path)
                line += '; path=' + opts.path;

            if (opts.duration) {
                var date = new Date();
                date.setTime( date.getTime() + ( opts.duration * 86400000 ) );

                line += '; expires=' + date.toGMTString();
            }

            if (opts.secure)
                line += '; secure';

            return window.document.cookie = line + ";";
        },

        del : function(name, opts) {
            opts = opts || {};
            
            opts.duration = -1;

            return cookie.set(name, '', opts);
        },

        // Based on Mootools Cookie.read
        // http://github.com/mootools/mootools-core/blob/dee21a848db7a8037e03a10a2da79172f12db543/Source/Utilities/Cookie.js
        get : function(name) {
            var search = window.document.cookie.match(
                '(?:^|;)\\s*' + name.replace(/([-.*+?^${}()|[\]\/\\])/g, '\\$1') + '=([^;]*)'
            );

            return search ? decodeURIComponent((search[1] + '').replace(/\+/g, '%20')) : undefined;
        }
    };

    window.cookie = cookie;
})(window);
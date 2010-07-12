/*!
 * CooQuery v3
 * http://lenonmarcel.com.br/projetos/cooquery
 *
 * Copyright 2009, 2010 Lenon Marcel
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 07-12-2010 (July 12, 2010)
 */

var cookie = {

    _date : function( duration )
    {
        var date = new Date();
        // 86400000 = 24 * 60 * 60 * 1000, or 1 day
        date.setTime( date.getTime() + ( duration * 86400000 ) );
        return date.toGMTString();
    },

    set : function( name, val, opts )
    {
        if (!opts) opts = {};

        var line = name + '=' + encodeURIComponent(val) +
                     ( opts.domain ? '; domain=' + opts.domain : '') +
                     ( opts.path ? '; path=' + opts.path : '' ) +
                     ( opts.duration ? '; expires=' + cookie._date(opts.duration) : '' ) +
                     ( opts.secure ? '; secure' : '' );

        return document.cookie = line;
    },

    del : function( name )
    {
        return cookie.set( name, '', { duration: -1 } );
    },

    // Based on Mootools Cookie.read function (http://mootools.net/docs/core/Utilities/Cookie#Cookie:read)
    get : function( name )
    {
        var search = document.cookie.match(
            '(?:^|;)\\s*' + name.replace(/([-.*+?^${}()|[\]\/\\])/g, '\\$1') + '=([^;]*)'
        );
        return (search) ? decodeURIComponent(search[1]) : null;
    }
};

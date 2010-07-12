
jQuery(function($) {

    var $name   = $('#name'),
        $value  = $('#value'),
        $domain = $('#domain'),
        $path   = $('#path'),
        $duration = $('#duration'),
        $secure   = $('#secure');

    $('#btn1').click( function() {
        var opts = {};

        if ($domain.val() != '') {
            opts.domain = $domain.val();
        }

        if ($path.val() != '') {
            opts.path = $path.val();
        }

        if ($duration.val() != '') {
            opts.duration = $duration.val();
        }

        if ($secure.is(':checked')) {
            opts.secure = true;
        }

        cookie.set($name.val(), $value.val(), opts);
    });

    $('#btn2').click( function() {
        var cookie_val = cookie.get($name.val());

        if (!cookie_val) {
            return alert('The cookie "' + $name.val() + '" isn\'t set');
        }

        return alert('The value of cookie "' + $name.val() + '" is "' + cookie_val + '"');
    });


    $('#btn3').click( function() {
        cookie.del($name.val());
    });
});

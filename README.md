jQuery CooQuery Plugin
======================
*  Version: 2
*  Homepage: [cooquery.lenonmarcel.com.br](http://cooquery.lenonmarcel.com.br/)
*  Author: [Lenon Marcel](http://lenonmarcel.com.br/)

What is it?
===========
The CooQuery is a jQuery plugin that helps the work of manage, edit, create and delete cookies.

It works in which browsers?
===========================
CooQuery is compatible with the most of modern browsers, and also Internet Explorer 6:

*  Firefox
*  Opera
*  Google Chrome
*  Internet Explorer (6+)

Examples
========
1. Set a new cookie, named "test cookie", with value "This is a test cookie":

        $('#example1').click(function(){
            var cookie = $.setCookie('test cookie', 'This is a test cookie', {
                duration: 10 // in days
            });
            if(cookie)
                alert('Cookie created!');
            else
                alert('Oops, an error occurred.');
        });

2. Read value of cookie "test cookie":

        $('#example2').click(function(){
            var value = $.readCookie('test cookie');
            if( value )
                alert( "Hey! This cookie exists, and their value is : \\n" + value );
            else
                alert( 'This cookie \'non ecziste\'!' );
        });

3. Delete cookie "test cookie":

        $('#example3').click(function(){
            var value = $.delCookie('test cookie');
            alert( "This cookie does not exist anymore \\\o/");
        });

Usage
=====
Create/set a cookie:
--------------------
    $.setCookie( 'NAME', 'VALUE', {
        duration : 1, // In days
        path : '',
        domain : '',
        secure : false
    });

Delete a cookie:
----------------
    $.delCookie( 'NAME' );

Read cookie value:
------------------
    $.readCookie( 'NAME' );

License
=======
Dual licensed under the MIT and GPL licenses.

*  [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
*  [http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

Copyright 2009, 2010 Lenon Marcel

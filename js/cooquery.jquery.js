/*
 * jQuery CooQuery plugin
 * Version 1 (21-NOV-2009)
 *
 * Copyright (c) 2009 Lenon Marcel <contato@lenonmarcel.com.br>
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Read more: http://cooquery.lenonmarcel.com.br/
 * 
 */
;(function($){
	function is_defined(value){
		return !(typeof value === 'undefined' || value === null);
	}
	$.set_cookie = function(name,value,expire,path,domain,secure){
		if(!is_defined(name))
			return false;
		
		var str = name + '=';
		
		if(is_defined(value))
			str += encodeURIComponent(value);
		
		str += ';';
		
		if (typeof expire == 'number'){
			var date = new Date();
			date.setDate(date.getDate() + expire);
			str += 'expires=' + date.toGMTString() + ';';
		}
		if (is_defined(path)) str += 'path=' + (path) + ';';
		if (is_defined(domain)) str += 'domain=' + (domain) + ';';
		if (is_defined(secure)) str += 'secure;';
		
		return document.cookie = str;
	};
	$.delete_cookie = function(name){
		if(!is_defined(name)) return false;
		$.set_cookie(name, "", -1);
	};
	$.read_cookie = function(name){
		if(!is_defined(name)) return false;
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++){
			var cookie = jQuery.trim(cookies[i]);
			if (cookie.substring(0, name.length + 1) == (name + '=')){
				return decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
		return null;
	};
})(jQuery);
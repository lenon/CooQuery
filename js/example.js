jQuery(document).ready(function($){
  $('#example1').click(function(){
    var cookie = $.setCookie('test cookie', 'This is a test cookie', {
      duration: 10 // in days
    });
    if(cookie)
      alert('Cookie created!');
    else
      alert('Oops, an error occurred.');
  });
  $('#example2').click(function(){
    var value = $.readCookie('test cookie');
    if( value )
      alert( "Hey! This cookie exists, and their value is : \n" + value );
    else
      alert( 'This cookie \'non ecziste\'!' );
  });
  $('#example3').click(function(){
    var value = $.delCookie('test cookie');
    alert( "This cookie does not exist anymore \\o/");
  });
  sh_highlightDocument();
});
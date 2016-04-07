$(document).ready(function() {
  document.getElementById("exercise1").style.visibility = "visible";
});

var  req  =  new  XMLHttpRequest ();
 req.open ( "GET" , "http://api.icndb.com/jokes/random" , true );
 req.send ( null );
 console.log (req);
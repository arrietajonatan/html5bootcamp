//Ejercicio3
var EventEmmitter = (function(movie){
	movie = new Movie();
});

EventEmmitter.prototype.on = $(document).ready(function(){
	document.getElementById("myMovies").addEventListener("click", myFunction);

function myFunction() {
		$("#botones").removeClass("hidden");
		$("#botones").addClass("visible");
}
});

EventEmmitter.prototype.emit = $(document).ready(function(){

	$("#movie1").click(function(){
		$("#impo").removeClass("hidden");
		$("#day").addClass("hidden");
		$("#piano").addClass("hidden");
		$("#thg").addClass("hidden");
		$("#snip").addClass("hidden");
	});

	$("#movie2").click(function(){
		$("#impo").addClass("hidden");
		$("#day").removeClass("hidden");
		$("#piano").addClass("hidden");
		$("#thg").addClass("hidden");
		$("#snip").addClass("hidden");
	});

	$("#movie3").click(function(){
		$("#impo").addClass("hidden");
		$("#day").addClass("hidden");
		$("#piano").removeClass("hidden");
		$("#thg").addClass("hidden");
		$("#snip").addClass("hidden");
	});

	$("#movie4").click(function(){
		$("#impo").addClass("hidden");
		$("#day").addClass("hidden");
		$("#piano").addClass("hidden");
		$("#thg").removeClass("hidden");
		$("#snip").addClass("hidden");
	});

	$("#movie5").click(function(){
		$("#impo").addClass("hidden");
		$("#day").addClass("hidden");
		$("#piano").addClass("hidden");
		$("#thg").addClass("hidden");
		$("#snip").removeClass("hidden");
	});


});

EventEmmitter.prototype.off = $(document).ready(function(){
	$("myMovies").off("click")
});

//Ejercicio1
var Movie = (function(title, year, duration){
	this.title=title;
	this.year=year;
	this.duration=duration;
});

EventEmmitter.prototype = new Movie();

//Ejercicio2
var movie1 = new Movie ('The impossible',2012,113);
//console.log(movie1);
var movie2 = new Movie ('The day after tomorrow',2004,124);
var movie3 = new Movie ('The hunger games',2012,142);
var movie4 = new Movie ('The pianist', 2002,152);
var movie5 = new Movie ('American Sniper',2014,132);

//Ejercicio4

var movie = new EventEmmitter();

Movie.prototype.play = function(){
    alert("Play");
};

Movie.prototype.pause = function(){
    alert("Pause");
};
Movie.prototype.resume = function(){
    alert("Resume");
};

//Ejercicio5

var Logger = (function(){

});

Logger.prototype.log= $(document).ready(function()
{
	$("#bPlay1").click(function(){
		console.log(movie1);
	});

	$("#bPlay2").click(function(){
		console.log(movie2);
	});

	$("#bPlay3").click(function(){
		console.log(movie3);
	});

	$("#bPlay4").click(function(){
		console.log(movie4);
	});

	$("#bPlay15").click(function(){
		console.log(movie5);
	});

});

/*Ejercicio6: Create an object called Social with methods share(friendName) 
and like(friendName) that will generate the following
 output "{friendName} likes/share {Movie Name} se Object.assign
  to mix Social methods into a Movie instance.*/

var social = {
	share: function(friendName){
			document.getElementById("bShare1").addEventListener("click", myFunctionA);
    		function myFunctionA() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " share with ";
    		 var var2 = friendName;
    		 var msj = var1 + var2;
    		 $("friend").html(msj);
		};
			document.getElementById("bShare2").addEventListener("click", myFunctionB);
    		function myFunctionB() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " share with ";
    		 var var2 = friendName;
    		 var msj = var1 + var2;
     		 $("friend").html(msj);   		 		 
		};
			document.getElementById("bShare3").addEventListener("click", myFunctionC);
    		function myFunctionC() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " share with ";
    		 var var2 = friendName;
    		 var msj = var1 + var2;
    		 $("friend").html(msj);
		};
			document.getElementById("bShare4").addEventListener("click", myFunctionD);
    		function myFunctionD() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " share with ";
    		 var var2 = friendName;
    		 var msj = var1 + var2;
    		 $("friend").html(msj);
		};
			document.getElementById("bShare5").addEventListener("click", myFunctionE);
    		function myFunctionE() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " share with ";
    		 var var2 = friendName;
    		 var msj = var1 + var2;
     		 $("friend").html(msj);
		 
		};
	        },

	like: function(friendName){
			document.getElementById("bLike1").addEventListener("click", myFunctionA);
    		function myFunctionA() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " likes ";
    		 var var2 = friendName;
    		 var msj = var2 + var1;
    		 $("friend").html(msj);
		};
			document.getElementById("bLike2").addEventListener("click", myFunctionB);
    		function myFunctionB() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " likes ";
    		 var var2 = friendName;
    		 var msj = var2 + var1;	
    		 $("friend").html(msj);	 
		};
			document.getElementById("bLike3").addEventListener("click", myFunctionC);
    		function myFunctionC() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " likes ";
    		 var var2 = friendName;
    		 var msj = var2 + var1;
    		 $("friend").html(msj);
		};
			document.getElementById("bLike4").addEventListener("click", myFunctionD);
    		function myFunctionD() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " likes ";
    		 var var2 = friendName;
    		 var msj = var2 + var1;
    		 $("friend").html(msj);
		};
			document.getElementById("bLike5").addEventListener("click", myFunctionE);
    		function myFunctionE() {
    		 friendName = document.getElementById("friendName").value;
    		 var var1 = " likes ";
    		 var var2 = friendName;
    		 var msj = var2 + var1;
    		 $("friend").html(msj);
		};
	       }

}

var obj = Object.assign(Movie, social);
$("#friend").html(obj);

//Ejercicio 7

var Actor = (function(name, age){
	this.name=name;
	this.age=age;
});

var actor1 = new Actor ('Adam Sandler', 49);
var actor2 = new Actor ('Megan Fox',29);
var actor3 = new Actor ('Ryan Reynolds', 39);
var actor4 = new Actor ('Jennifer Aniston',47);

var cast = [
 new Actor ('Megan Fox',29),
 new Actor ('Ryan Reynolds', 39)
];

//Ejercicio8

Movie.prototype.addActor = function(actor){
	this.actor= actor;
};

Movie.prototype.addCast = function(cast){
	this.cast= cast;
};

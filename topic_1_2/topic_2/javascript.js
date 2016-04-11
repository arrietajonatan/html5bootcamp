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
function Movie(title, year, duration){
	this.title=title;
	this.year=year;
	this.duration=duration;
};

//Ejercicio2
var movie1 = new Movie ('The implossible',2012,113);
//console.log(movie1);
var movie2 = new Movie ('The day after tomorrow',2004,124);
var movie3 = new Movie ('The hunger games',2012,142);
var movie4 = new Movie ('The pianist', 2002,152);
var movie5 = new Movie ('American Sniper',2014,132);

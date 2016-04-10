
function mostrar(){
	$(document).ready(function() {
  		document.getElementById("agregar").style.visibility = "visible";
	});
		

}

function add() 
{
	var matrix = new Array (document.getElementById("number").value);
	var tabla = document.createElement("table");
	tabla.id="tabla";

 	  for (var i=0; i < document.getElementById("number").value ; i++)
 	   {
	  	   	 var matrix[i]= new Array (1);
	     	 var j=0;
 		  
  			  for (j=0; j=1; j++) 
  			  {

  			  	if (j=0) {
  			  	  matrix [i][j]=document.getElementById("name").value;
 	 		      var tr = document.createElement("tr");
 	 		      tabla.appendChild(tr);
 		          var name = document.createTextNode(document.getElementsByTagName('name').value);
 			      
  			  	};

  			  	 else{
  			  	  matrix [i][j]=document.getElementById("last").value;
 	 		      var td = document.createElement("td");
 	 		      tabla.appendChild(td);
 		          var last = document.createTextNode(document.getElementsByTagName('last').value);

  			  	 };
  			   
  			   
  			  };
 	   
 	   };
 	    document.getElementById("tabla").appendChild(tabla);
};




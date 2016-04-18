var movies = angular.module("movies", ["LocalStorageModule"])

movies.controller("maintController",function($scope,localStorageService){
	   
	    $scope.newMovie = {};  
	    if(localStorageService.get("angular-movies")){
	    	$scope.movies = localStorageService.get("angular-movies");
	    }
	    else{
	    			$scope.movies = [
			{
				name: "The impossible",
				year: "2012",
				duration: "113 min",
				genre: "drama",
				file: "media/piano.jpg"
			},
			{
				name: "The day after tomorrow",
				year: "2004",
				duration: "124 min",
				genre: "science fiction",
				file: "media/piano.jpg"

			},
			{
				name: "The hunger games",
				year: "2012",
				duration: "142 min",
				genre: "science fiction",
				file: "media/piano.jpg"
			},
			{
				name: "The pianist",
				year: "2002",
				duration: "152 min",
				genre: "drama",
				file: "media/piano.jpg"
			},
			{
				name: "American Sniper",
				year: "2014",
				duration: "132 min",
				genre: "drama",
				file: "media/piano.jpg"
			}
		];

	    }
   	   
	    //Mostrando datos del select
	    $scope.selected=false;
	    $scope.showSelected=function(){
	    	$scope.selected=true;
	    }

        //Agregando una pelicula
		$scope.addMovie=function(){
			$scope.movies.push($scope.newMovie);
			$scope.newMovie = {};	
			localStorageService.set("angular-movies",$scope.movies);
		    $scope.add=false;
		    alert('The movie has been added');
 	     }
         //Borrando y reseteando
		$scope.deleteMovie = function(movie){
        var index = $scope.movies.indexOf(movie);
        	if(index == -1) return;
        	$scope.movies.splice(index,1);
        	 localStorageService.set("angular-movies",$scope.movies);
       		 alert('The movie has been deleted');
        }
        
        //Mostrar el editar
        $scope.add=false;
        $scope.edit=false;
        $scope.toggle=function(){
        $scope.edit = !$scope.edit;
        $scope.add=false;
        }

        $scope.toggleI=function(){
        $scope.add = !$scope.add;
        $scope.edit=false;
        }

        //Cancelar
        $scope.cancelMovie=function(){
        $scope.add=false;
        $scope.edit=false;
        }

        //Editando una pelicula        
  	    $scope.editMovie = function(movie){
        var index = $scope.movies.indexOf(movie);
        var modif = $scope.movies[index];	    	
        modif = $scope.movie;
	    localStorageService.set("angular-movies",$scope.movies);
	    alert('The movie has been edited');
	    $scope.edit=false;
	    $scope.show = true;
	    }
});

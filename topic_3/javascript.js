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
				genre: "drama"
			},
			{
				name: "The day after tomorrow",
				year: "2004",
				duration: "124 min",
				genre: "science fiction"

			},
			{
				name: "The hunger games",
				year: "2012",
				duration: "142 min",
				genre: "science fiction"
			},
			{
				name: "The pianist",
				year: "2002",
				duration: "152 min",
				genre: "drama"
			},
			{
				name: "American Sniper",
				year: "2014",
				duration: "132 min",
				genre: "drama"
			}
		];

	    }

		$scope.addMovie=function(){
			$scope.movies.push($scope.newMovie);
			$scope.newMovie = {};	
			localStorageService.set("angular-movies",$scope.movies);
				}

});





/*var movies = angular.module("movies", []);

movies.controller("maintController",["$scope", function(app){
		app.newMovie= {};
		app.movies = [
			{
				name: "The impossible",
				year: "2012",
				duration: "113 min",
				genre: "drama"
			},
			{
				name: "The day after tomorrow",
				year: "2004",
				duration: "124 min",
				genre: "science fiction"

			},
			{
				name: "The hunger games",
				year: "2012",
				duration: "142 min",
				genre: "science fiction"
			},
			{
				name: "The pianist",
				year: "2002",
				duration: "152 min",
				genre: "drama"
			},
			{
				name: "American Sniper",
				year: "2014",
				duration: "132 min",
				genre: "drama"
			}
		];

		app.addMovie = function(){
			app.movies.push($scope.newMovie);
			app.newMovie= {};
		}
}]);
*/
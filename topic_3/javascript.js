var movies = angular.module("movies", []);

movies.controller("myMovies",function($scope){
		$scope.movie = {};
		$scope.movie.datos = [
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
		]
});
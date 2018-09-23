var movie1 = {
	name: "A Clockwork Orange",
	rating: 4.5,
	hasWatched: true
};

var movie2 = {
	name: "Gone with the Wind",
	rating: 5,
	hasWatched: false
};

var movie3 = {
	name: "Sonic Creep",
	rating: 1,
	hasWatched: false
};

var movies = [movie1, movie2, movie3];

movies.forEach(function(movie) {
	if (movie.hasWatched == true) {
		console.log("You have watched \"" + movie.name + "\" - " + movie.rating + " stars");
	} else {
		console.log("You have not watched \"" + movie.name + "\" - " + movie.rating + " stars");
	}
});

// ANOTHER WAY

var movies = [
	{
		title: "Frog Guts",
		hasWatched: false,
		rating: 2
	},
	{
		title: "The Burbs",
		hasWatched: true,
		rating: 3.5
	},
	{
		title: "Nipple Catastrophe",
		hasWatched: false,
		rating: 1.5
	}
]

movies.forEach(function(movie) {
	console.log(buildString(movie));
});

function buildString(movie) {
	var result = "You have ";
	if (movie.hasWatched != true) {
		result += "not ";
	}
	result += "watched \"" + movie.title;
	result += "\" " + movie.rating + " stars.";
	return result;
}

















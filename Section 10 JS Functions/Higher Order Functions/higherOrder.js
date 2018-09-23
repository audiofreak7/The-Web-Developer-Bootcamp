function sing() {
	console.log("twinkle, twinkle...");
	console.log("how I wonder....");
}

// setInterval is an an example of Higher Order Function, or a 
// function that can accept another function as input. Here, "sing" 
// is the name of a function that is used as input. It executes 
// "sing"every 100 milliseconds.

setInterval(sing, 1000);
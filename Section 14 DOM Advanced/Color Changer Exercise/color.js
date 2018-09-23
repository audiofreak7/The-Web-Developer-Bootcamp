var button = document.querySelector("button");

//ONE SOLUTION
// var isPurple = false;
// button.addEventListener("click", function() {
// 	if (isPurple) {
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple; 

// });

//SECOND SOLUTION
button.addEventListener("click", function() {
	document.body.classList.toggle("purple"); //toggles the function'purple' on/off
})

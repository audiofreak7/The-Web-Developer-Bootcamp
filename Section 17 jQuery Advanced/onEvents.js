// change h1 text to purple when clicked
$("h1").on("click", function() {
	$(this).css("color", "purple");
});



$("input").on("keypress", function() {
	console.log("key pressed.");
})

// Normally you would use the css file to accomplish the following tasks.
// Here we are demonstrating the differnt events that can be selected using .on()

$("button").on("mouseenter", function() {
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function() {
	$(this).css("font-weight", "normal");
});
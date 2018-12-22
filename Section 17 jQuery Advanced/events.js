$("h1").click(function() {
	alert("h1 clicked!");
});

// Add a click-listener to all buttons using one line of code.
$("button").click(function() {
	alert("button clicked!");
});

// using 'this' in jQuery
$("button").click(function() {
	$(this).css("background", "pink");

	var text = $(this).text();
	console.log("You pressed: " + text);
});

$("input").keypress(function(event) {
	if(event.which === 13) { //jQuery "which" character code for the "Enter" key is '13'.
		alert("You hit ENTER!!");
	}
	console.log(event);
});
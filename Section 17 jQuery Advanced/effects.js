$("#fadeOutButton").on("click", function() {
	$("div").fadeOut(1000, function() { //the function within fadeOut allows code to be run AFTER the fadeOut is complete.
		alert("fadeOut finished.");
		$(this).remove(); //remove each div from the document
	});
});

$("#fadeInButton").on("click", function() {
	$("h4").fadeIn(1000, function() { //the function within fadeOut allows code to be run AFTER the fadeOut is complete.
		alert("fadeIn finished.");

	});
});

$("#fadeToggleButton").on("click", function() {
	$("#jerseyGuyPic").fadeToggle(500, function() { //the function within fadeOut allows code to be run AFTER the fadeOut is complete.
		alert("fadeToggle finished.");

	});
});

$("#slideDownPony").on("click", function() {
	$("#ponyPic").slideDown(2000);
});


$("#slideUpBarney").on("click", function() {
	$("#barneyPic").slideUp();
	$(this).remove();
});

$("#slideTogglePlant").on("click", function() {
	$("#plantPic").slideToggle(1000, function() {
		alert("Plant has been slid!");
	});
});

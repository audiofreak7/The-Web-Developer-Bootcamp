// toggle line items as 'completed' with the 'completed' class
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// clicking on the span (i.e. the 'X') removes it's parent element, the line item.
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// add text from the input into a line item when the <enter> key is pressed
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val(); // todoText equals the text typed into the input filed
		$(this).val(""); //clears text input when user hits 'Enter'.
		// Add li to ul.
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// toggle the input when the '+' icon is pressed
$(".fa-edit").click(function() {
	$("input[type='text']").fadeToggle();
});
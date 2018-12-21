//SECTION 14: INRODUCTION TO EVENTS
tag.addEventListener("click", function() {
	tag.style.background = "orange"; //click the h1 to change the background to orange.
});

var lis = document.querySelectorAll("li");
for (var i = 0; lis.length > i; i++) {
	lis[i].addEventListener("click", changeText);
}

function changeText(lineItem) {
	this.style.color = "pink"; // all 'li' elements trun pink when clicked.
}

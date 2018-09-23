//changing an elements's style - here, we change the first h1.
var tag = document.querySelector("h1");
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "100px";


//adding/removing css classes
var pTag = document.querySelector("p");
pTag.classList.add("big"); //add the css class "big"
pTag.classList.remove("big"); //remove the class "big"
pTag.classList.toggle("big"); //toggle on/off the class "big"


//changing the text of a tag
var pTag2 = document.getElementsByTagName("p")[1]; // select the 2nd paragraph on the page.
pTag2.textContent = "This paragraph text was updated using the 'textContent' method from the JS file. Note that the <strong> tag from the prior text is erased in the process.";

var pTag3 = document.getElementsByTagName("p")[2];
pTag3.innerHTML; //"This is the <strong>third</strong> paragraph."
pTag3.innerHTML = "This is the replaced <strong>3rd</strong> paragraph, using 'innerHTML' method to grab the html text from an element."

var replacementText = document.querySelector("ul"); 
replacementText.innerHTML = "<p>This paragraph replaces 3 li's contained in a ul, using 'innerHTML' method.</p>";

document.querySelector("h1").textContent = "This is the NEW h1!"; //Select element and Assign data in one line.

//document.querySelector("body").innerHTML = "<h1>Goodbye!</h1>"; //This line changes all text on the page the the <h1> to the left. 


//changing attributes(src, href, etc.) - getAttribute() and setAttribute()
var url = document.querySelector("img");
url.getAttribute("img"); //the URL of the image spec'd on the HTML file.
url.setAttribute("src", "https://www.downloadfeast.com/wp-content/uploads/2016/03/selfie.jpg"); //set a new image source URL

var link = document.querySelector("a");
link.setAttribute("href", "http://www.johnpospisil.com"); //change the URL of a link.
link.textContent = "Link to www.JohnPospisil.com"; //change the display text of the link.

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



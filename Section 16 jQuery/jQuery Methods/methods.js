
//Getting
var h1Text = $("h1").text();
var liText = $("li").text();

var h1HTML = $("h1").html();
var liHTML = $("l1").html();

var imgURL = $("img").attr("src");

var inputText = $("input").val(); // ""
var selectedAnimal = $("select").val(); //"Ostrich"


//Setting
$(h1Text).text("This is the new h1, changed using the jQuery 'text' method.");
$("li").text("This text changed using the 'text()' method.");

$("h1").html("h1 updated using the 'html()' method.");
$("ul").html("<li>I hacked your LIs!</li><li>In your Arthur Treachin' FACE!</li>")

$("img").attr("width", "200px");

$("img").attr({
	title: "Standing Pine Marten",
	alt: "Picture of a standing Pine Marten",
	src: "https://www.nature.scot/sites/default/files/styles/teaser_feature_image_large/public/2017-07/TWH_250710_0012.JPG?itok=PZZw4noP"
});

$("input").val("Marty McFly"); // puts this value in the input box
$("select").val("Pine Marten"); // selects Pine Marten as the default selection in the dropdown.


//Adding/Removing Methods
$("h1").addClass("correct");
$("li").addClass("wrong");

$("h1").removeClass("correct");

$("h1").toggleClass("correct");






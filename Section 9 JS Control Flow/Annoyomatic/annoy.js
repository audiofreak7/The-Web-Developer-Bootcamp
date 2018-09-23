// var answer = prompt("Are we there yet?");
// while (answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?"); 
// }
// alert("Yeah, we made it!");

//VERSION 2
var answer = prompt("Are we there yet?");
// The following line checks to see if "yes" or "yeah" appear anywhere in the user response. If not present, -1 is returned.
while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	var answer = prompt("Are we there yet?"); 
}
alert("Yeah, we made it!");
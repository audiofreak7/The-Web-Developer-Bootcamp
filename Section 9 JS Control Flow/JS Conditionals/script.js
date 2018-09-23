var age = prompt("Hey! What's yer age?");


if (age < 0) {
	alert("ERROR: Age is less than zero.");
}
else if ((age == 1) || (age == 4) || (age == 9) || (age == 16) || (age == 25) || (age == 36) || (age == 49) || (age == 64) || (age == 81) || (age == 100) || (age == 121)) {
	alert("Perfect square!");
}
else if (age == 21) {
	alert("Happy 21st Birthday!");
}
else if (age % 2 !== 0) {
	alert("You're age is odd!");
}

else if (age < 18) {
	alert("Sorry, you are not old enough to enter the venue.");
}
else if (age < 21) {
	alert("Come on in, but NO drinkin!");
}
else {
	alert("Get yer ass in hear and have a drink!");
}
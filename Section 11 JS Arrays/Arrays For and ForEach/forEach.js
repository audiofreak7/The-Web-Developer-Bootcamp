var numbers = [1,2,3,4,5,6,7,8,9,10];

console.log("iterate through an Array using forEach()"); 
numbers.forEach(function(number) {
	if (number % 3 === 0) {
		console.log(number);
	}
});

console.log("iterate through an Array using a For Loop");
for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		console.log(numbers[i]);
	}
}


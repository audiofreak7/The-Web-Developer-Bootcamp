function isEven(num) {
	return num % 2 == 0;
}
isEven(2);
isEven(3);
isEven(12983749238759248676);
isEven(17);

function factorial(num) {
	var result = 1;
	while (num > 1) {
		result = num * (num - 1);
		num--;
	}
	return result;
}

factorial(4);
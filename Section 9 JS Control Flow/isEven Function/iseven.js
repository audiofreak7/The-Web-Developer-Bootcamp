function isEven(num) {
	return num % 2 == 0;
}
isEven(2);
isEven(3);
isEven(12983749238759248676);
isEven(17);

function factorial(num) {
	if (num < 0) {
		return -1;
	}
	if (num == 0 || num == 1) {
		return 1;
	}
	var result = num;
	while (num > 1) {
		result = result * (num - 1);
		// console.log("num = " + num + "  result = " + result);
		num--;
	}
	return result;
}

// A better way to Factorialize using recursion:
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

factorial(4);

function kebabToSnake(userText) {
	while (userText.search("-") !== -1) {
		var index = userText.indexOf("-");
		userText =  userText.substr(0,index) + "_" + userText.substr(index+1);
	}
	return userText;
}

kebabToSnake("smoke-in-the-room")

// BETTER kebabToSnake VERSION 2
function kebabToSnakeVer2(userText) {
	return = userText.replace(/-/g , "_");
}






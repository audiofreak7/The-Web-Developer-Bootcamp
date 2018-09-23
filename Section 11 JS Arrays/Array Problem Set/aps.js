// Print array elements, line-by-line in reverse order.
function printReverse(userArray) {
	for (var i = userArray.length - 1; i >= 0; i--) {
		console.log(userArray[i]);
	}
}

nums = [0,1,2,3,4,5];

printReverse(nums);

// Determine if items in an array are the same.
function isUniform(userArray) {
	for (var i = 1; i < userArray.length; i++) {
		if (userArray[i] != userArray[0]) {
			return false;
		} 
		return true;
	}
}


sameNums = [5,5,5,5];
diffNums = [3,4,5,6];

isUniform(sameNums); //true
isUniform(diffNums); //false


// Return the sum of an array's items.
function sumArray(userArray) { //I found the next two lines online.
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return userArray.reduce(reducer);
}

function sumArray2(userArray) { 
	var sum = 0;
	userArray.forEach(function(userItem){
		sum += userItem;
	});
	return sum;
}

sumArray(sameNums); //returns 20
sumArray(diffNums); //returns 18


// Return the largest item in a given array.
function max(userArray) {
	return Math.max(...userArray); // I found this online.
}

function max2(userArray) {
	var tempMax = userArray[0];
	for (var i = 1; i < userArray.length; i++) {
		if (userArray[i] > tempMax) {
			tempMax = userArray[i];
		}
	}
	return tempMax;
}

max(nums);
max(diffNums);

max2(nums);
max2(diffNums);
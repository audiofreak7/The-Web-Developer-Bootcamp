window.setTimeout(function() {
  // The first and last lines delay loading of this file 500 ms so that the html
  // text has time to load before prompts start.

  var todos = ["Buy new turtle."];

  var input = prompt("What would you like to do?");


  while (input !== "quit") {

	//handle input
	if (input === "list") {
		listTodos();
	} 
	//ask user for new todo
	else if (input === "new") {
		addTodo();
	}
	else if (input == "delete") {
		deleteTodo();
	}

	//ask again for input
	input = prompt("What would you like to do?");
}

console.log("OK, you quit the app");

//***********************************************

function listTodos() {
	console.log("******************************");
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("******************************");
}

function addTodo() {
	var newTodo = prompt("Enter new todo:");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo() {
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");
		//delete that todo
		//splice()
		todos.splice(index,1); //remove array item at the "index" for 1 item in the array.
		console.log("Deleted Todo");
	}

}, 500);
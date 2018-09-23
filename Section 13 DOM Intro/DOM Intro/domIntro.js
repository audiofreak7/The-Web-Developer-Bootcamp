//getElementById()
var elementById = document.getElementById("highlight");


//getElementsByClassName()
var elementsByClassName = document.getElementsByClassName("bolded");


//getElementsByTagName()
var elementsByTagName = document.getElementsByTagName("li");


//querySelector() - returns the first element that 
//matches a given CSS-style selector.
var tag = document.querySelector("#highlight");
var firstH1 = document.querySelector("h1"); //selects: <h1>Hello</h1>

//querySelectorAll() - relturns a list of elements 
//that match a given CSS-style selector
var listOfElements = document.querySelectorAll("h1");
var listOfBolds = document.querySelectorAll(".bolded");
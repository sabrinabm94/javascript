
var buttonSendTesteOne = document.querySelector("#send-test-one");
// click
buttonSendTesteOne.onclick = function() {
	console.log("click");
}

// double click
buttonSendTesteOne.ondblclick = function() {
	console.log("double click");
}

// mouse over
buttonSendTesteOne.onmouseover = function() {
	console.log("mouse over");
}

//event lister
var buttonSendTesteTwo = document.querySelector("#send-teste-two");

function clickOne() {
	console.log("click one");
}

function clickTwo() {
	console.log("click two");
	buttonSendTesteTwo.removeEventListener("click", clickOne);
}

buttonSendTesteTwo.addEventListener("click", clickOne);
buttonSendTesteTwo.addEventListener("click", clickTwo);

//addpopup
var title = document.querySelector("#titleShowPopUp");
title.addEventListener("click", showPopUp);

function showPopUp() {
	alert("show pop up");
}

//propagation order
var parent = document.querySelector("#parent");
var child = document.querySelector("#child");

//parent.addEventListener("click", "showParent");
//child.addEventListener("click", "showChild");

function showParent() {
	console.log("show parent");
}

function showChild(event) {
	event.stopPropagation();
	event.target.style.background = "orange";
	console.log("show child");
}

//invoke functions
console.log("");
console.log("invoke functions");
var name = "Sabrina";
(function showName() {
	console.log(name);
})(name);

//closures
console.log("");
console.log("closures");
function multiply(value) {
	var total = value;
	return function() {
		return total * 2;
	}
}
var getResult = multiply(2);
console.log(getResult());
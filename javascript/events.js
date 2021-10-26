
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
	event.stopPropagation(); //avoid bubble effect, we want just the click event of the child, avoid the click event in parent be triggered
	event.target.style.background = "orange";
	console.log("show child");
}

//invoke is used to imedity invoke one function just when it was read
console.log("");
console.log("Invoke function");
var name = "Sabrina";
(function showName() {
	console.log("Invoke " + name); //sabrina
})(name);

//closures prevent that variables used inside the closure function be changed by scripts outside
var total = 0; //global scope
console.log("");
console.log("Closure function");
function multiply(value) {
	var total = value;  //local scope
	return function() {
		return total * 2;
	}
}
var getResult = multiply(2);
console.log("Closure " + getResult()); //4
console.log("total " + total); //0
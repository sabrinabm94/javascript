//Window
console.log("window");
console.log(window);

console.log("document");
console.log(window.document);

console.log("document.body.children[0]");
console.log(window.document.body.children[0]);

console.log("document.body.children[0] chanced for red color");
window.document.body.children[0].style.color = "red";

// getElementsBy tag, id and class
console.log("");
console.log("getElementsByTagName");
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h2")[1]);

console.log("getElementsByClassName");
console.log(document.getElementsByClassName("title"));
console.log(document.getElementsByTagName("title")[1]);
//this 2 previous examples have a problem to select one very specific element in doom

console.log("getElementById");
console.log(document.getElementById("catch"));

// querySelector
console.log("");
console.log("querySelector by class");
console.log(document.querySelector(".title"));

console.log("querySelector by id");
console.log(document.querySelector("#catch"));
//*just return the first element with this class/id name

// querySelectorAll
console.log("querySelectorAll by class");
console.log(document.querySelectorAll(".title"));
//*supported for the most of browsers.


// set a new style
console.log("");
console.log("createElementDiv and set a new style");
var createElementDiv = document.createElement("div");
createElementDiv.textContainer = "My new div";
createElementDiv.style.color = 'blue';
createElementDiv.style.fontSize = '20px';
console.log(createElementDiv);

// insertAdjacentElement - before begin
console.log("");
console.log("insertAdjacentElement - before begin");
var parent = document.querySelector('.parent');
var child1 = document.createElement('div');
child1.textContainer = "first child";

var child2 = document.createElement('div');
child2.textContainer = "secound child";

parent.insertAdjacentElement("beforebegin", child1);

// insertAdjacentElement - after begin	
console.log("");
console.log("insertAdjacentElement - after begin");
parent.insertAdjacentElement("afterbegin", child2);

// insertAdjacentHTML
	console.log("");
console.log("insertAdjacentHTML");
	parent.insertAdjacentHTML("afterend", "<div>new div</div>");	

// remove elements
var container = document.querySelector(".container");
var removeMe = document.querySelector("#removeMe");

container.removeChild(removeMe);

//removeMe.remove();

// window information
console.log("");
console.log("widown information");
console.log("window width with scroll bar: " + window.innerWidth);
console.log("window width without scroll bar: " + window.outerWidth);

console.log("window height with scroll bar and developer tools: " + window.innerHeight);
console.log("window height without scroll bar and developer tools: " + window.outerHeight);

console.log("window url: " + window.location);

// open link
//console.log(window.open("http://www.google.com.br"));


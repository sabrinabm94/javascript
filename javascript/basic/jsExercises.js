var arrayNumber = [0, 1, 2, 3];
var arrayString = ["Brazil", "Mexico", "Australia", "Russia", "Iceland"];

//undefined
console.log(" ");
console.log("undefined");
console.log("Showing arrayNumber in 3 position: " + arrayNumber[3]);
console.log("Showing arrayNumber in 4 position: " + arrayNumber[5] + " because the 4 position is out of range, not exist!");

//isNaN
console.log(" ");
console.log("isNaN");
//console.log("arrayNumber in 0 position: " + arrayNumber[0] + ", is not a number? " + isNaN(arrayNumber[0]));
console.log("arrayString in 0 position: " + arrayString[0] + ", is not a number? " + isNaN(arrayString[0]));

//object
var user = {
	name: "Sabrina",
	lastName: "Boing",
	age: 23
};

console.log(" ");
console.log("object");
console.log("My name is: " + user.name);
console.log("Last name: " + user.lastName);
console.log("Age: " + user.age);

//verify empty variables with if and else
var myName = "Sabrina"; //not empty
var myLastName = "Boing";
//var myName = undefined; //empty
//var myName; //empty

if(myName) {
	console.log("");
	console.log("verify empty variable: myName");
	console.log("myName is no empty!");
} else {
	console.log("");
	console.log("verify empty variable: myName");
	console.log("myName is empty!");
}

if(!myLastName) {
	console.log("");
	console.log("verify empty variable: myLastName");
	console.log("myLastName is empty!");
} else {
	console.log("");
	console.log("verify empty variable: myLastName");
	console.log("myLastName is not empty!");
}

if(myName && myLastName) {
	console.log("");
	console.log("myName and myLastName is not empty!");
}

//case
var fruitNumber = 3;

switch(fruitNumber) {
	case 1: 
		console.log("");
		console.log("case 1");
		console.log("my favorite fruit is Strawberry");
		break;
	case 1: 
		console.log("");
		console.log("case 2");
		console.log("my favorite fruit is Blackberry");
		break;
	case 3: 
		console.log("");
		console.log("case 3");
		console.log("my favorite fruit is AVOCADO!");
		break;
	default: 
		console.log("");
		console.log("default");
		console.log("I don't eat fruts");
		break;
}

//for
console.log("");
console.log("for");

for(var x = 0; x <= 5; x++) {
	console.log("x: " + x);
}

//while
console.log("");
console.log("while");

var z = 0;

while(z <= 5) {
	console.log("z: " + z);
	z = z + 1;
}

//comparations
console.log("");
console.log("comparation: equals");

var x = 1;
var y = 2;
var result = x == y ? "equals" : "not equals";

console.log("comparation with " + x + " and " + y + " is "+ result);

//function
console.log("");
console.log("function");

oneFunction("Hello word!");
function oneFunction(message) {
	console.log(message);
}

//scope global and local
console.log("");
console.log("scope global and local");

var name = "Anne";

function getNameLocal() {
	var name = "Diana";

	console.log("getNameLocal: " + name);
}

function getNameGlobal() {
	console.log("getNameGlobal: " + name);
}

function getNameParameter(name) {
	console.log("getNameParameter: " + name);
}

getNameLocal();
getNameGlobal();
getNameParameter("Rebeka");

//text manipulation
console.log("");
console.log("text manipulation");

var name = "Sabrina b m";

var nameUppercase = name.toUpperCase();
console.log(name + " toUppercase: " + nameUppercase);

var nameLowercase = name.toLowerCase();
console.log(name + " toLowerCase: " + nameLowercase);

var nameTrim = name.trim();
console.log(name + " Trim: " + nameTrim);

var nameLength = name.length;
console.log(name + " length: " + nameLength);

var nameCharAt = name.charAt(0);
console.log(name + " charAt: " + nameCharAt);

var nameSplit = name.split("/");
console.log(name + " split: " + nameSplit);

//typeof
console.log("");
console.log("typeOf");

var numberOne = 1;
var boolTrue = true;
console.log("numberOne: " + typeof(numberOne));
console.log("boolTrue: " + typeof(boolTrue));

//parseInt
console.log("");
console.log("parseInt");
console.log("boolTrue: " + typeof parseInt(boolTrue));

//toString
console.log("");
console.log("toString");
console.log("numberOne: " + typeof numberOne.toString());


//math helpers
console.log("");
console.log("math helpers");

//rounded
var numberToRound = 2.45;
var numberRound = Math.round(numberToRound);
console.log("numberRounded: " + numberRound);

//rounded to more
var numberToCeil = 3.14;
var numberCeil = Math.ceil(numberToCeil);
console.log("numberCeil: " + numberCeil);

//rounded to less
var numberToFloor = 3.14;
var numberFloor = Math.floor(numberToFloor);
console.log("numberFloor: " + numberFloor);

//return the hight number
var numberMax = Math.max((1000, 78, 2));
console.log("numberMax: " + numberMax);

//return the low number
var numberMin = Math.min((3, 2, 1));
console.log("numberMin: " + numberMin);

//Operators
console.log("Operators");
function args(arg1, arg2, arg3) {
	const arguments = [arg1, arg2, arg3];
	console.log(arguments);
}
args('val 1', 'val 2', 'val 3');

//Rest
console.log("Rest");
function args(...args) {
	console.log(arguments[2]);
}
args('val 1', 'val 2', 'val 3');


//Spread
console.log("Spread");
const brandsOne = ['Ford', 'Nissan'];
const brandsTwo = ['Audi', 'BMW'];
const allBrands = [...brandsOne, ...brandsTwo, 'Land Rover'];
console.log(allBrands);
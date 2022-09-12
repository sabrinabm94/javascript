//objects

//create a object
var name = "Lys";

var user = { //object
	name: "Sabrina", //key
	lastName: "B.",
	age: 23,
	misc: { //key object
		hobbies: ['walking', 'reading']
	},
	messageInsideObject: function() {
		console.log('I`m ' + this.name);
	},
	messageOutsideObject: function() {
		console.log('I`m ' + name);
	}
};

console.log(user);
console.log(user.name + "`s hobbies "  + user.hobbies);

//this
user.messageInsideObject(); //Sabrina
user.messageOutsideObject(); //Lys

//changing the object name
user.name = "Verônica";
console.log(user);

//other away to create a new object
var otherUser = new Object();
otherUser.name = "Phillip";
otherUser.lastName = "Seifer"
otherUser.age = 25;

console.log(otherUser);

//the best away to create a new object
var someOne = {};
someOne.addSomeOne = function() {
	console.log("add new user");
};

someOne.name = "Katherina";
someOne.lastName = "Petra"
someOne.age = 500;

console.log(someOne);

//prototipe
console.log("");
console.log("prototipe");

//construction function to complement the prototype
function User() {
	//store local prototype
}

//create a new instance of object
var fire = {
	name: "Sara",
	lastName: "Bennet"
};

var anyOne = new User();
anyOne.name = "Anne";
anyOne.lastName = "Vor";

//add the function to anyOne construction prototipe
Object.prototype.scream = function() { //inside global scope by prototypes
	console.log(anyOne.name + " says Fire!");
};

anyOne.prototype.scream = function() { //inside user
	console.log(anyOne.name + " says Fire!");
};

anyOne.scream();

console.log("user " + anyOne);
console.log("user proto " + anyOne.__proto__);
console.log("global proto " + global.__proto__);
console.log("fire proto " + fire.__proto__);


//using objects
function human() { //constructor
	this.eyesColor;
	this.hairColor;
	this.name;
	this.fingers = 20;
	this.hands = 2;
	this.stillAlive = function() {
		console.log(this.name + " still alive.");
	}
}
var woman = new human();
woman.eyesColor = 'brown';
woman.hairColor = 'dark blond';
woman.name = 'Sabrina';
console.log('One woman: ');
console.log(woman);

var man = new human();
man.eyesColor = 'green';
man.hairColor = 'dark blond';
man.name = 'Alexander';
console.log('One man: ');
console.log(man);

//car 
//version 1
var car = new Car();

Car.prototype.status = 'New';
Car.prototype.wheels = 4;
Car.prototype.avail = function() {
	console.log('available');
}

var ford = new Car();
console.log(ford.__proto__);


const car = new Car();
const ford =  new Car();
console.log(ford);

//version 2
class Car {
	constructor() {
		this.condition = 'New';
		this.wheels = '4';
		this.avail = () => {
			console.log('avail');
		}
	}

	otherFunction() {
		console.log('hey');
	}
}

class Ford extends Car {
	constructor() {
		super();
	}
}

const car = new Car();
const ford =  new Car();

//reduce code
const user = {
	name: "Sabrina",
	lastname: "Boing",
	age: 24
};

//version 1
const {name} = user;
console.log(name);
console.log(lastname);
console.log(age);

//version 2
const message = ({name, lastname, age}, salute) => {
	console.log('my name is ${name} ${lastname}, age ${age}');
}
message(user, 'hey');


//arguments
const users = {
	names:['Sabrina', 'Alexander', 'Edson']
}
const {names: [name1, name2]} = users;
console.log(name2);


//literal objects
const request = (url, data) => {
	$.ajax(
		{
			method: 'POST',
			url,
			data
		}
	)
}
request('https://', {name: 'James'});

const createCharacter = function (name, power, friend) {
	return {
		name: name,
		power: power,
		getFriend: function() {
			return friend;
		}
	}
}
const character = createCharacter('Batman', 'Jump', 'Random butler');
console.log(character);



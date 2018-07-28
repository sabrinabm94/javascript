//objects

//create a object
var name = "Elena";

var user = {
	name: "Sabrina",
	lastName: "B.",
	age: 23,
	misc: {
		hobbies: ['walking', 'ride a bike']
	},
	message: function() {
		console.log('I am ' + this.name);
	},
	message2: function() {
		console.log('I am ' + name);
	}
};

console.log("user: " + user);
console.log("user hobbies: "  + user.hobbies);

//this
user.message();
user.message2();

//changing the object name
user.name = "Verônica";
console.log(user);

//one away to create a new object
var user = new Object();
user.name = "Stefan";
user.lastName = "Salvatore"
user.age = 140;

console.log(user);

//the best away to create a new object
var user = {};
user.addUser = function() {
	console.log("add new user");
};

user.name = "Katherina";
user.lastName = "Petrova"
user.age = 500;

console.log(user);

//prototipe
console.log("");
console.log("prototipe");

//construction function
function User() {

}

//create a new instance of object
var fire = {
	name: "Bonnie",
	lastName: "Bennet"
};

var user = new User();
user.name = "Caroline";
user.lastName = "Forbis";

//add the function to User construction prototipe
User.prototype.scream = function() {
	console.log("user says Fire!!");
};

user.scream();

console.log(user.__proto__);
console.log(fire.__proto__);

//using objects
function human() {
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
woman.hairColor = 'blond';
woman.name = 'Sabrina';
console.log('Object woman: ');
console.log(woman);

var man = new human();
man.eyesColor = 'green';
man.hairColor = 'dark blond';
man.name = 'Alexander';
console.log('Object man: ');
console.log(man);

// array
console.log("array");
var arrayNumber = [0, 1, 2, 3, 4];
var arrayString = ["Brazil", "United States", "Australia", "Canada", "Russia"];

console.log("arrayNumber: " + arrayNumber);
console.log("arrayString: " + arrayString);

// remove the last value of array
console.log("");
console.log("pop");
arrayNumber.pop();
console.log("arrayNumber: " + arrayNumber);

// add a element in the end of array
console.log("");
console.log("push 5");
arrayNumber.push(5);
console.log("arrayNumber: " + arrayNumber);

// remove the first value of array
console.log("");
console.log("shift");
arrayString.shift();
console.log("arrayString: " + arrayString);

// add element in begginer of array
console.log("");
console.log("unshift Brazil");
arrayString.unshift("Brazil");
console.log("arrayString: " + arrayString);

//indexOf find the position on the array of value informed
console.log("");
console.log("indexOf founded");
console.log("arrayString: " + arrayString.indexOf("Australia"));

console.log("indexOf not founded");
console.log("arrayString: " + arrayString.indexOf("México"));

//splice takes the position informaded and remove from the beginning to the position
console.log("");
console.log("arrayString: " + arrayString);
console.log("splice 2");
var newArrayA = arrayString.splice(2);
console.log("newArrayA: " + newArrayA);

console.log("splice 1, 2");
var newArrayB = arrayString.splice(1, 2);
console.log("newArrayB: " + newArrayB);

//slice don't mutate the original array
var arrayString = ["Brazil", "United States", "Australia", "Canada", "Russia"];
console.log("slice 1, 3");
var newArrayC = arrayString.splice(1, 3);
console.log("newArrayC: " + newArrayC);

//concat
console.log("");
console.log("concat");
var array1 = ["Helena", "Elisabeth"];
var array2 = ["Zack", "Dereck"];
var concatArray = array1.concat(array2);
console.log("concatArray: " + concatArray);

//join don't chance the original array and return all in string, you can select the caracter to join use
console.log("");
console.log("Join");
var array3 = ["Richard", "Stefan"];
var array4 = ["Daniel", "Felipe"];
var concatJoin = array3.join("/");
console.log("concatJoin: " + concatJoin);

//filter helper
console.log("");
console.log("Filter helper");
var arrayToFilter = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var arrayFiltered = arrayToFilter.filter(function(item){ //anonymous function
	return item > 80;
});
console.log("arrayFiltered: " + arrayFiltered);

//map helper
console.log("");
console.log("Map helper");
var arrayToMapping = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayMapping = arrayToMapping.map(function(item){ //anonymous function
	return item + 100;
});
console.log("arrayMapping: " + arrayMapping);

//for earch in array
console.log("");
console.log("forEach");
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.forEach(function(item){ //anonymous function
	console.log("Item in array: " + item);
});
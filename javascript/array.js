//array
console.log("Array");
var arrayNumber = [0, 1, 2, 3, 5];
var arrayCountries = ["Brazil", "United States", "Australia", "Canada", "Iceland"];
console.log("arrayNumber: " + arrayNumber);
console.log("arrayCountries: " + arrayCountries);

//change one value of array by index
var numberToFix = 4;
console.log("");
console.log("Change value: index 4, value " + arrayNumber[4] + " to " + numberToFix);
arrayNumber[4] = numberToFix;
console.log("arrayNumber: " + arrayNumber);
//*is needed to know the full size of array

//remove the last value of array
console.log("");
console.log("Pop");
arrayNumber.pop();
console.log("arrayNumber: " + arrayNumber);

//add a element in the end of array
console.log("");
console.log("Push value 5");
arrayNumber.push(5);
console.log("arrayNumber: " + arrayNumber);

//remove the first value of array
console.log("");
console.log("Shift");
arrayCountries.shift();
console.log("arrayCountries: " + arrayCountries);

//add element in begginer of array
console.log("");
console.log("Unshift");
arrayCountries.unshift("Brazil");
console.log("arrayCountries: " + arrayCountries);

//indexOf find the position on the array of value informed
console.log("");
console.log("IndexOf founded");
console.log("arrayCountries: " + arrayCountries.indexOf("Australia"));

console.log("IndexOf not founded");
console.log("arrayCountries: " + arrayCountries.indexOf("México"));

//splice mutate the original array
//takes the position informaded and remove from the beginning to the position
console.log("");
console.log("Splice 1, 2");
var arrayCountriesSpliced = arrayCountries.splice(1, 2); //"United States", "Australia"
console.log("arrayCountries: " + arrayCountries);
console.log("arrayCountriesSpliced: " + arrayCountriesSpliced);

//slice don't mutate the original array because create a new one
console.log("");
console.log("Slice 1, 3");
arrayCountries = ["Brazil", "United States", "Australia", "Canada", "Iceland"];
var arrayCountriesSlice = arrayCountries.slice(1, 3); //"United States", "Australia"
console.log("arrayCountries: " + arrayCountries);
console.log("arrayCountriesSlice: " + arrayCountriesSlice);

//concat don't mutate the original array
console.log("");
console.log("Concat");
var arrayNamesA = ["Rafael", "Rebeka"];
var arrayNamesB = ["Anne", "Erik"];
var arrayNamesConcated = arrayNamesA.concat(arrayNamesB);
console.log("arrayNamesConcated: " + arrayNamesConcated);

//join don't mutate the original array and return all in string, you can select the caracter to join use
console.log("");
console.log("Join");
var arrayNamesC = ["Daniel", "Rafael"];
var arrayNamesJoined = arrayNamesC.join("/"); //argument for be used to values separation
console.log("arrayNamesJoined: " + arrayNamesJoined);

//for earch don`t return a array
console.log("");
console.log("ForEach array");
var arrayForEach = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayForEach.forEach(function(item) { //anonymous function
	console.log("arrayForEach: " + item);
});

//filter helper return a array
console.log("");
console.log("Filter array");
var arrayToFilter = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var arrayFiltered = arrayToFilter.filter(function(item) {
	return item > arrayToFilter[3]; //numbers grand than 40
});
console.log("arrayFiltered: " + arrayFiltered);

console.log("");
console.log("Filter multilevels array");

const products = [
	{name: 'ipad', category: 'Devices', number: 20, price: 200},
	{name: 'Sony 3d', category: 'TV', number: 5, price: 400},
	{name: 'E256', category: 'Blender', number: 3, price: 50},
	{name: 'Super Vision', category: 'TV', number: 7, price: 500},
	{name: 'Iphone 7', category: 'Phones', number: 40, price: 2}
];

const results = products.filter(function(product) {
	return product.category == "TV"
	&& product.number > 0
	&& product.price > 400
});
console.log(results); //super visions

//map helper return a array
console.log("");
console.log("Map array");
var arrayToMapping = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayMapping = arrayToMapping.map(function(item) {
	return item + 100;
});
console.log("arrayMapping: " + arrayMapping);
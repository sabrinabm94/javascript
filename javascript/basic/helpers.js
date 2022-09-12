var disserts = ['pudim', 'cake', 'pie'];
const animals = [
    {specie: 'cat', eyes: 'yellow', fur: 'grey'},
    {specie: 'dog', eyes: 'brown', fur: 'black'},
    {specie: 'bird', eyes: 'green', fur: 'grey'}
];


//for
console.log('for')
for(var i = 0; i < disserts.length; i++) {
    console.log(disserts[i]);
}


//forearch
console.log('foreach')
disserts.forEach(
    function(disserts) {
        console.log(dissert);
    }
);
animals.forEach(
    function(animals) {
        console.log(animal.specie + ' has ' + animal.eyes + ' eyes' + ' and ' + animal.fur + ' fur.');
    }
);


//map
console.log('map');
var numbers = [1, 2, 3];

var sum = [];
for(var i = 0; i < numbers.length; i++) {
    sum.push(numbers[i] + 1);
}
console.log(sum);

var sumWithMap =  numbers.map(
    function(number) {
        return number + 1;
    }
);
console.log(sumWithMap);


//filter
console.log('filter');
const greyAnimals = animals.filter(
    function(animal) {
        return animal.fur === 'grey';
    }
);
console.log(greyAnimals);


//find
console.log('find');
const blackAnimals = animals.find(
    function(animal) {
        return animal.fur === 'black';
    }
);
console.log(blackAnimals);
 

//every
console.log('every and some');
const students = [
    {name: 'Sabrina', grade: '9'},
    {name: 'Edson', grade: '6'},
    {name: 'Anne', grade: '7'}
];
const everyGoodStudants = students.every(
    function(studant) {
        return studant.grade >= 7;
    }
);
console.log(everyGoodStudants);


//some
const SomeGoodStudants = students.some(
    function(studant) {
        return studant.grade >= 7;
    }
);
console.log(SomeGoodStudants);


//reducer
console.log('reducer');
const value = 100;
const accounts = [
    {number: 1, amount: 10}, //index 0
    {number: 2, amount: 6000.00}, //index 1
    {number: 3, amount: 1000.00} //index 2
];
const accountsResult = current.reduce(
    function(sum, account) {
        return sum + account.amount;
    }, 1 //the index start point
);
console.log(accountsResult);
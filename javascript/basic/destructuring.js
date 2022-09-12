//Destructuring
//objects
console.log("Destructuring object");
const user = {
    name: 'Kaique',
    lastname: "Monteiro",
    age: 25
};

const {name} = user;
const {lastname} = user;
const {age} = user;
console.log(name + " " + lastname + " age ");

const message = ({name, lastname, age}) => {
    console.log('my name is ${name} ${lastname}, age ${age}');
}
message(user);


//arrays
console.log("Destructuring arrays");
const cars = ['Camaro', 'Nova', 'A4'];
const [carOne, carTwo, carThree] = cars;
console.log(carTwo); //not needed to know the array index to get the value because it is accessed by name

const users = {
    names: ['Seth', 'Ray'],
    ages: [30, 18]
}

const {names} = users;
const {names: [firstName], age: [firstAge]} = users;
console.log(names);
console.log("Name " + firstName + " age " + firstAge);


//arguments
console.log("Destructuring function arguments");
function createCar({type, brand, model, color, year}) {

}
const carToCreate = {
    brand: 'Ford',
    model: 'Focus',
    color: 'Red',
    year: '2020',
    type: 'sport'
}
createCar(car);
console.log(carToCreate);
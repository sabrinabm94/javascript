//Classes
console.log("Classes");
function Car() {};
class Car {
    constructor(options) {
        this.status = options.status;
        this.wheels = options.wheels;
        this.avail = options.avail;
    }

    hi() { //exclusively to car class
        console.log('Hi!');
    }
};

const car = new Car();
const ford = new Car();
ford.color = 'red';

class Ford extends Car {
    constructor() {
        super();
    }
}
const newFord = new ford();

const fiat = new Car(
    {
        status: 'Old',
        wheels: 4,
        avail: () => {
            console.log('unabled');
        }
    }
);
console.log(car);
console.log(ford);
console.log(newFord);
console.log(fiat);
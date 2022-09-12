export function sum(a, b) {
    const numberOne = parseInt(a);
    const numberTwo = parseInt(b);

    if(Number.isNaN(numberOne) && Number.isNaN(numberTwo)) {
        throw new Error("Check your inputs and try again");
    }
    
    return numberOne + numberTwo;
}
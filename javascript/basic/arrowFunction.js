let firstNumber = parseInt(document.querySelector(".firstNumber").textContent); 
//pegando o conteúdo da div e convertendo para string, para assim poder realizar operações numéricas
let secondNumber = parseInt(document.querySelector(".secondNumber").textContent);
let resultsDiv = document.querySelector(".results");

let firstSumMethodclass= "firstSumMethodResult";
let secondSumMethodclass= "secondSumMethodResult";
let thirdSumMethodclass= "thirdSumMethodResult";

cleanResults(firstSumMethodClassName);
cleanResults(secondSumMethodClassName);
cleanResults(thirdSumMethodClassName);

function cleanResults(divName) {
    let element =  document.querySelectorAll(divName)[0];

    if(element != null) {
        console.log(element);
        element.remove();
    }
}

function createResults(text, result, className) {
    const newDiv = document.createElement('p');
    newDiv.className = className;
    newDiv.textContent = text + ": " + result;
    resultsDiv.appendChild(newDiv)
}

//before ECMAscript 6
var firstSumMethodResult = function(x, y) {
    return x + y;
  };
  
firstSumMethodResult(firstNumber, secondNumber);
createResults("Old sum method", firstSumMethodResult, firstSumMethodClassName);


//ECMAscript 6
//Com as arrow functions não tem riscos de ocorrer problemas conhecidos com o this:
let secondSumMethod = (x, y) => {
    return x + y
}
let secondSumMethodResult = secondSumMethod(firstNumber, secondNumber);
createResults("Sum method", secondSumMethodResult, secondSumMethodClassName);

//ECMAscript 6 more simplified
let thirdSumMethod = (x, y) => x + y;
let thirdSumMethodResult = thirdSumMethod(firstNumber, secondNumber);
createResults("Sum method simplified", thirdSumMethodResult, thirdSumMethodClassName);

const cars = {
    brands: ['Ford', 'BMW', 'Audi'],
    category: 'sport car',
    message: function() {
        return this.brands.map( brand => {
            console.log('${brand} is a ${this.category}')
        })
    }
};
cars.message();






let firstNumber = parseInt(document.querySelector(".firstNumber").textContent); 
//pegando o conteúdo da div e convertendo para string, para assim poder realizar operações numéricas
let secoundNumber = parseInt(document.querySelector(".secoundNumber").textContent);
let resultsDiv = document.querySelector(".results");

let firstSumMethodClassName= "firstSumMethodResult";
let secoundSumMethodClassName= "secoundSumMethodResult";
let thirdSumMethodClassName= "thirdSumMethodResult";

cleanResults(firstSumMethodClassName);
cleanResults(secoundSumMethodClassName);
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
  
firstSumMethodResult(firstNumber, secoundNumber);
createResults("Old sum method", firstSumMethodResult, firstSumMethodClassName);


//ECMAscript 6
//Com as arrow functions não tem riscos de ocorrer problemas conhecidos com o this:
let secoundSumMethod = (x, y) => {
    return x + y
}
let secoundSumMethodResult = secoundSumMethod(firstNumber, secoundNumber);
createResults("Sum method", secoundSumMethodResult, secoundSumMethodClassName);

//ECMAscript 6 more simplified
let thirdSumMethod = (x, y) => x + y;
let thirdSumMethodResult = thirdSumMethod(firstNumber, secoundNumber);
createResults("Sum method simplified", thirdSumMethodResult, thirdSumMethodClassName);






'use strict';  


    // FUNCTION 
function logger() {
    console.log (`My name is Jonas`);
}

// invoking / calling / running function 
logger();
logger();
logger();

function fruitProcessor (apples, oranges) {
    // console.log (apples, oranges);
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;   
}

const appleJuice = fruitProcessor (9,7);
console.log (appleJuice);

const appleOrangeJuice = fruitProcessor (2, 4);
console.log (appleOrangeJuice);


    // FUNCTION DECLARATION AND EXPRESSION 

    // Function Declaration 
function calcAge1(birthYear) {
    return 2037 - birthYear;    
}

const age1 = calcAge1 (1990);
// console.log (age1);


    // Function Expression 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2 (1990)
console.log (age1, age2); 
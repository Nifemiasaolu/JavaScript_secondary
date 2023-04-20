'use strict';  


    // FUNCTION 
// function logger() {
//     console.log (`My name is Jonas`);
// }

// invoking / calling / running function 
// logger();
// logger();
// logger();

// function fruitProcessor (apples, oranges) {
//     // console.log (apples, oranges);
//     const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
//     return juice;   
// }

// const appleJuice = fruitProcessor (9,7);
// console.log (appleJuice);

// const appleOrangeJuice = fruitProcessor (2, 4);
// console.log (appleOrangeJuice);


///////////////////////////////////////////
    // FUNCTION DECLARATION AND EXPRESSION 

    // Function Declaration 
// function calcAge1(birthYear) {
//     return 2037 - birthYear;    
// }

// const age1 = calcAge1 (1990);
// // console.log (age1);


//     // Function Expression 
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2 (1990)
// console.log (age1, age2); 


///////////////////////////////
    // ARROW FUNCTION 

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1990);
// console.log (age3);

    // writing two or more function in the arrow function 
// const yearsBeforeRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// const realAge = yearsBeforeRetirement (1992);
// console.log (realAge);


// const yearsBeforeRetirement = (birthYear, firstName) => 
// {
//     const age = 2037 - birthYear; 
//     const retirement = 65 - age;
//     return `${firstName}'s remaining years to retire is ${retirement} years`;
// }
// const realAge = yearsBeforeRetirement (1996, 'Dave');
// console.log (realAge);


/////////////////////////////////
    // FUNCTION CALLING OTHER FUNCTIONS 
// const cutPieces = function (fruit) {
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log (fruitProcessor (3,5));

const calcAge = function (year){
    return 2037 - year
}

const yearsBeforeRetirement = function (birthYear) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
}

console.log (yearsBeforeRetirement(1982));

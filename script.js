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
// const yearsBefore3 = birthYear => {
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

// const calcAge = function (year){
//     return 2037 - year
// }

// const yearsBeforeRetirement = function (birthYear) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//     }
// }

// console.log (yearsBeforeRetirement(1982));


// const calcAverage1 = (a,b,c) => (a + b + c) / 3;

// const scoreDolphins1 = calcAverage1 (404,23,71);
// const scoreKoalas1 = calcAverage1 (65, 54, 49);
// // console.log (scoreDolphins1, scoreKoalas1);

// const checkWinner1 = function (avgDolphins1, avgKoalas1) {
//     if (scoreDolphins1 >= (2* scoreKoalas1)) {
//         console.log (`Dolphins win 🏆 (${avgDolphins1} vs ${avgKoalas1})`);
//     } else if (scoreKoalas1 >= (2 * scoreDolphins1)) {
//         console.log (`Koalas win 🏆 (${avgKoalas1} vs ${avgDolphins1})`)
//     } else {
//         console.log (`The game is a tie...`)
//     }
// }

// checkWinner1 (scoreDolphins1, scoreKoalas1);


    // Test 2
    // const scoreDolphins2 = calcAverage1 (195,54,41);
    // const scoreKoalas2 = calcAverage1 (23, 34, 27);
    // console.log (scoreDolphins2, scoreKoalas2);

    // const checkWinner2 = function (avgDolphin2, avgKoalas2) {
    //     if (scoreDolphins2 >= (2* scoreKoalas2)) {
    //         console.log (`Dolphins win 🏆 (${scoreDolphins2} vs ${scoreKoalas2})`);
    //     } else if (scoreKoalas2 >= (2 * scoreDolphins2)) {
    //         console.log (`Koalas win 🏆 (${scoreKoalas2} vs ${scoreDolphins2})`)
    //     } else {
    //         console.log (`The game is a tie...`)
    //     }
    // }

    // checkWinner2 (scoreDolphins2, scoreKoalas2);



    ////////////////////////
        // ARRAYS

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log (friends);
// const years = new Array(1991, 1989, 1954, 1972);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends); 

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtman', 2037-1991, 'teacher', friends];
// console.log (jonas);

// // Exercise

// const 

const slice = function (juice) {
    return juice * 3;`
}

console.log(jui)

const calcAge = function (year){
    return 2037 - year
}

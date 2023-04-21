'use strict';

    // FUNCTION

// const country = 'Nigeria';
// const population = 200;
// const capitalCity = 'Abuja';

// function describeCountry (country, population, capitalCity) {
//     return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// }
// const genenralKnowledge = describeCountry ('Nigeria', 200, 'Abuja');
// console.log (genenralKnowledge);


// function describeCountry (country, population, capitalCity) {
//     return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// }
// const genenralKnowledge1 = describeCountry ('Canada', 50, 'Ontario');
// console.log (genenralKnowledge1);


// function describeCountry (country, population, capitalCity) {
//     return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// }
// const genenralKnowledge2 = describeCountry ('Ghana', 90, 'Accra');
// console.log (genenralKnowledge2);


////////////////////////////////////////////
    // FUNCTION DECLARATION / EXPRESSION

    // FUNCTION DECLARATION 
// const worldPopulation = 7900;

// function percentageOfWorld1 (country,population) {
//     const percentage = (population / worldPopulation
//     ) * 100;
//     return `${country} has ${population} million people, so it's about ${percentage}% of the world population.`;
// }

// const populationNigeria = percentageOfWorld1 
// ('Nigeria', 200);
// console.log (populationNigeria);

// const populationFinland = percentageOfWorld1 
// ('Finland', 6);
// console.log (populationFinland);

// const populationFrance = percentageOfWorld1 
// ('France', 14);
// console.log (populationFrance);


///////////////////////////////////////
    // FUNCTION EXPRESSION 

// const percentageOfWorld2 = function (country, population){
//     const percentage = (population / 7900) * 100;
    // return `${country} has ${population} million people, so it's about ${percentage}% of the world population.`;
// }

// const populationIreland = percentageOfWorld2 
// ('Ireland', 50);
// const populationJapan = percentageOfWorld2 
// ('Japan', 150);
// const populationChina = percentageOfWorld2 
// ('China', 600);
// console.log (populationIreland);
// console.log (populationJapan);
// console.log (populationChina);


/////////////////////////////////
    // ARROW FUNCTION

// const percentageOfWorld3 = (country, population) => {
//    const percentage = (population / 7900) * 100;
//    return `${country} has ${population} million people, so it's about ${percentage}% of the world population.`;
// } 

// const populationIreland1 = percentageOfWorld3 
// ('Ireland', 50);
// const populationJapan1 = percentageOfWorld3 
// ('Japan', 150);
// const populationChina1 = percentageOfWorld3 
// ('China',600);

// console.log (populationIreland1);
// console.log (populationJapan1);
// console.log (populationChina1);


//////////////////////////////////////
    // FUNCTIONS CALLING OTHER FUNCTIONS 

//     const percentageOfWorld1 = function (population){
//     return (population / 7900) * 100; 
// }
// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
// }
// console.log (describePopulation('Nigeria', 200));


/////////////////////////
    // CODING CHALLENGE #1 

// const calcAverage = (a,b,c) => (a + b + c) / 3; 

//     // Test 1
  
// // console.log (scoreDolphins, scoreKoalas);


// const checkWinner = function (avgDolphins, avgKoalas) {
// //    const dolphins = calcAverage(avgDolphins);
// //    const koalas = calcAverage (avgKoalas);
    
//    if (avgDolphins >= (2 * avgKoalas)) {
//     console.log( `Dolphins win 🏆(${avgDolphins} vs ${avgKoalas})`);
//    } else if (avgKoalas >= (2 * avgDolphins)) {
//     console.log(`Koalas win 🏆(${avgKoalas} vs ${avgDolphin})`);
//    } else {
//     console.log (`No team wins...`)
//    }
// } 
// checkWinner(scoreDolphins, scoreKoalas);


//     // Test 2
// scoreDolphins = calcAverage (85, 54,41);
// scoreKoalas = calcAverage (23, 34, 27);
// console.log (scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);


/////////////// ARRAYS 

const population = [200, 40, 65,72];
console.log (population.length);



const percentageOfWorld1 = function (population){
        return (population / 7900) * 100; 
    }

const percentage = (percentageOfWorld1 (200));
console.log (percentage);



"use strict";

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


/////////////// 
// ARRAYS

// const population = [200, 40, 65,72];
// console.log (population.length);

// const percentageOfWorld1 = function (population){
//         return (population / 7900) * 100;
//     }

// const percentage = (percentageOfWorld1 (200));
// console.log (percentage);

//     // BASIC ARRAY OPERATORS ASSIGNMENT

// const neighbour = ['Ghana', 'Cameroun', 'Togo', 'Niger', 'South Africa'];

// neighbour.push('Utopia');
// console.log (neighbour);
// neighbour.pop();
// console.log (neighbour);

// if (neighbour.includes('Germany')){
//     console.log (`Country is included in the array`)
// } else {
//     console.log (`Probably not an African country`)
// }

// neighbour[neighbour.indexOf('Togo')] = 'Republic of Togo';
// console.log (neighbour);
// console.log (neighbour.length);


///////////////////////////////
// CODE CHALLENGE #2

// const bill = 100;

// const calcTip = function (bill) {
//    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);


//////////////////////////
// OBJECT ASSIGNMENT

// const myCountry = {
//     country:  'Nigeria',
//     capital: 'Abuja',
//     language: 'English',
//     population: 200,
//     neighbours: ['Ghana', 'Togo', 'Cameroun', 'Niger']
// }
// // console.log(myCountry);
// console.log (`${myCountry.country} has ${myCountry.population} million
// ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring counries
// and a capital of ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry.population -= 5;
// console.log(myCountry.population);


////////////////////////
// OBJECT METHOD ASSIGNMENT

//     const myCountry = {
//         country:  'Nigeria',
//         capital: 'Abuja',
//         language: 'English',
//         population: 200,
//         neighbours: ['Ghana', 'Togo', 'Cameroun', 'Niger'],
//         describe: function(){
//             return `${this.country} has ${this.population} million
//             ${this.language}-speaking people,
//             ${this.neighbours.length} neighbouring counries
//             and a capital of ${this.capital}.`
//         },
//         checkIsland: function() {
//             this.isIsland = this.neighbours.length === 0 ? true : false;
//             return this.isIsland;
//         }
//     }

// // console.log(myCountry.describe());
// console.log(myCountry.checkIsland());


//////////////////// 
// CODE CHALLENGE #3

// const markBMI = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmiValue = this.mass/ (this.height ** 2)
//         return this.bmiValue;
//     }
// }

// const johnBMI = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmiValue = this.mass/ (this.height ** 2)
//         return this.bmiValue;
//     }
// }

// console.log (markBMI.calcBMI(), johnBMI.calcBMI());

// if (markBMI.calcBMI >= johnBMI.calcBMI) {
//     console.log (`${markBMI.fullName}'s BMI (${markBMI.calcBMI()}) is higher than ${johnBMI.fullName}'s BMI (${johnBMI.calcBMI()})`)
// } else {
//     console.log (`${johnBMI.fullName}'s BMI (${johnBMI.calcBMI()}) is higher than ${markBMI.fullName}'s BMI (${markBMI.calcBMI()})`)
// }


///////////////////
// THE FOR LOOP ITERATION ASSIGNMENT

// for (let i = 1; i <= 50; i++) {
//     console.log (`Voter number [i] is currently voting.`)
// }


///////////////////
// LOOPING Array, BREAKING AND CONTINUING ASSIGNMENT

// const population = [200, 40, 65,72];

// const percentageOfWorld1 = function (population){
//         return (population / 7900) * 100;
//     }
// const percentage2 = [];

// for (let i = 0; i < population.length; i++) {
//     percentage2.push(percentageOfWorld1 (population[i]));
// }
// console.log(percentage2);


//////////////////////
// LOOPING BACKWARDS AND LOOP IN LOOP

// const listOfNeighours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ]

//     for (let i = 0; i < listOfNeighours.length; i++) {
//         for (let y = 0; y < listOfNeighours[i].length; y++) {
//            console.log (`Neighbour: ${listOfNeighours[i][y]}`);

//         }


//////////////////
// WHILE LOOP ASSIGNMENT

// const population1 = [200, 40, 65,72];
// const percentageOfWorld2 = function (population1){
//             return (population1 / 7900) * 100;
//         }
//  const percentage3 = [];

//  let i = 1;
// while (i < population1.length) {
//     percentage3.push (percentageOfWorld2 (population1[i]));
//     i++;
// }

// console.log (percentage3);


//////////////////////////
// CODE CHALLENGE #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
    const money = calcTip(bills[i]);
    tips.push(money);
    totals.push(tips[i] + bills[i]);
}
console.log(tips);
console.log(totals);

// BONUS

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        // or
        sum += arr[i];
    }
    // console.log(sum);

    return sum / arr.length;
};

console.log (calcAverage([5, 4, 9]));
console.log (calcAverage(totals));
console.log (calcAverage(tips));

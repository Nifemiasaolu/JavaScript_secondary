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

// Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const ages1 = calcAge(years[1]);
// const ages2 = calcAge(years[years.length - 1]);

// console.log (age1, ages1, ages2);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log (ages);


//////////////////
// BASIC ARRAY METHODS

// const friends = ['Michael', 'Steven', 'Peter'];

///// Add element 

// Push Method 
// const newLength = friends.push('Jay');
// console.log (friends); 
// console.log(newLength);

// // Unshift Method 
// friends.unshift('John');
// console.log(friends);


///// Remove element 

// Pop Method 
// friends.pop(); //Removes the Last element on the array
// const popped = friends.pop();
// console.log (popped);
// console.log(friends);

// friends.shift(); //Removes the FIRST element on the array.
// console.log(friends);


// IndexOf Method 
// console.log (friends.indexOf('Steven')); //It tells the position of the element in the array.

// console.log (friends.indexOf('Bob')); // it gives a result of '-1' if the element is not present inside the array.


// Includes Method - It tells whether a condition is true or false, hence being used in If/Else statement.
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob')); 
// // If an element is not present in an array list, the 'includes' function results it as '-1'.

// console.log(friends.includes(23));


// Check

// if (friends.includes('bob')){
//     console.log (`You have a friend called Steven`)
// }  else {
//     console.log (`The names aren't included.`)
// }


///////////////
// OBJECTS

// 


// console.log (jonas.firstName);
// console.log (jonas['lastName']);

// const nameKey = 'Name';

// console.log (jonas['first' + nameKey]);
// console.log (jonas['last' + nameKey]);

// const interestedIn = prompt ('What are you interested in? Choose between firstName, lastName, age, job and friends');
// // console.log (jonas.interestedIn);


// if (jonas[interestedIn]) {
//     console.log (jonas[interestedIn]);
// } else  {
//     console.log (`Wrong request! Choose between firstName, lastName, age, job and friends`)
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@joansSchmedtmann';
// console.log (jonas);


    // CHALLENGE 
//Jonas has 3 friends, and his best friend is Michael

// console.log (`${jonas['firstName']} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)



////////////
    // OBJECT METHOD 

    // const jonas = {
    //     firstName: 'Jonas',
    //     lastName: 'Schmedtmann',
    //     birthYear: 1991,
    //     job: 'teacher',
    //     friends: ['Michael', 'Peter', 'Steven'],
    //     hasDriversLicence: true,

        // calcAge: function (birthYear) {
        //     return 2037 - birthYear;
        // }
        
        // calcAge: function() {
        //     // console.log (this);
        //     return 2037 - jonas.birthYear;
        // }

    //     calcAge: function() {
    //         this.age = 2037 - jonas.birthYear;
    //         return this.age;
    //     },

    //     getSummary: function() {
    //         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence`;
    //     }
    // }

    // console.log (jonas.calcAge());

    // console.log (jonas.age);
    // // console.log (jonas.age);
    // // console.log (jonas.age);

    // console.log(jonas.getSummary());



/////////////////////////
    // LOOP ITERATION

    
    // for (let rep = 1; rep <= 10; rep++) {
    //     console.log (`Lifting weigts repitition ${rep} 🏋️‍♀️`);
    // }


    // LOOPING ARRAYS
    // const jonas = [
    //     'Jonas',
    //     'Schmedtmann',
    //     1991,
    //    'teacher',
    //     ['Michael', 'Peter', 'Steven'],
    //     true
    // ]

    // const types = []
    // // console.log (jonas.length);
    // for (let i = 0; i < jonas.length; i++) {
    //     // Reading from jonas array 
    //     // console.log (jonas[i], typeof jonas[i]);
        
    //     // Filling types array 
    //     // types[i] = typeof jonas[i];
    //     types.push (typeof jonas[i]);
    // }

    // console.log(types);    


    /////////////////
    // How to Loop Through Arrays
    // const years = [1991, 2007, 1969, 2020];
    // const ages = [];

    // for (let i = 0; i < years.length; i++) {
    //     ages.push(2037 - years[i]);
    //     // or 
    //     // ages[i] = (2037  - years[i]);
    // }

    // console.log(ages);


    // /////////////////
    // // Continue and Break Statement 
    // console.log('---ONLY STRINGS---');
    // for (let i = 0; i < jonas.length; i++) {
    //     if (typeof jonas[i] != 'string') continue;
    //     console.log (jonas[i], typeof jonas[i]);
    // }
    
    
    // console.log('---BREAK WITH NUMBER---');
    // for (let i = 0; i < jonas.length; i++) {
    //     if (typeof jonas[i] === 'number') break; 
    //     console.log (jonas[i], typeof jonas[i]);
    // }
    


    ///////////////
    // LOOPING BACKWARDS AND LOOP IN LOOP 


    // LOOP BACKWARD
    // const jonas = [
    //     'Jonas',
    //     'Schmedtmann',
    //     1991,
    //    'teacher',
    //     ['Michael', 'Peter', 'Steven'],

    // ]

    // for (let i = jonas.length - 1; i >= 0; i--) {
    //     console.log (i, jonas[i]);
    // }


    // LOOP IN A LOOP 

    // for (let exercise = 1; exercise < 5; exercise++) {
    //     console.log (`-------Starting Exercise ${exercise}`);
    
    //     for (let rep = 1; rep < 6; rep++) {
    //         console.log (`Exercise ${exercise}: Lifting weight repitition ${rep}`);          
    //     }
    // }


    ////////////////
    // WHILE LOOP
      
    // let rep = 1;
    // while (rep <=10) {
    //     console.log (`WHILE: Lifting weigts repitition ${rep} 🏋️‍♀️`);
    //     rep++
    // }
   
    

    // let dice = Math.trunc(Math.random() * 6) + 1;

    // while (dice !== 6){
    //     console.log (`You rolled a ${dice}`);
    //     dice = Math.trunc(Math.random() * 6) + 1;
    //     if (dice === 6) console.log (`Loop is about to end...`)
    // }


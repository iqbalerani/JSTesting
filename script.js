'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// // const interface = 'Audio';

// function logger() {
//     console.log('My name is Iqbal');
// }

// // calling / running /invoking function
// logger()

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 1));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)


// function calcAge1(birthYear) {
//     return 2050 - birthYear;
// }

// console.log(calcAge1(1984))

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// console.log(calcAge2(1984));

// const birthYear = 1984

// // Arrow function
// const calcAge3 = birthYear => 2050 - birthYear

// console.log(calcAge3(birthYear))

// const yearsUnitRetirement = (birthYear, firtName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firtName} retires in ${retirement} years`
// }

// console.log(yearsUnitRetirement(1984, 'Iqbal'));
// console.log(yearsUnitRetirement(1988, 'Saima'));


// // Non Arrow (standard way)
// let add = function (x, y) {
//     return x + y;
// }
// console.log(add(10, 20)); // 30

// // Arrow style
// let add = (x, y) => x + y;
// console.log(add(10, 20)); // 30;

// // You can still encapsulate
// let add = (x, y) => { return x + y; };

//nested function
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//     return juice;
// }

// // fruitProcessor(2, 3)
// console.log(fruitProcessor(2, 3))

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];

// console.log(friends[2])

// const year = new Array(1991, 1984, 2008, 2020);
// year[2] = 2010;
// console.log(year)

// const friends = ['Micheal', 'Steven', 'Peter'];
// friends.push('Jay');
// friends.pop(2);

// friends.unshift('John');

// friends.pop();
// console.log(friends);

// friends.shift();

// console.log(friends);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'));


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtanm',
//     birthYear: 1984,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverslicense: true,
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriverslicense ? 'a' : 'no'} driver's licence`
//     }
// };

// // console.log(jonas.job)
// // console.log(jonas['age'])
// jonas.calcAge();
// console.log(jonas.age);

// console.log(jonas.age);
// console.log(jonas.age)
// console.log(jonas.getSummary())

// for loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights reptition ${rep}`)
// }

// let rep = 1;
// while (rep != 10) {
//     console.log(`Lifting weights reptition ${rep}`);
//     rep++;
// }

let rep = 0;
while (rep < 10) {
    ++rep;
    console.log(`Lifting weights repetition ${rep}`);
}


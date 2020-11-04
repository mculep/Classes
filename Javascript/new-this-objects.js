// 1. Instance an object of any name of your choice.

function Food() {}
let burger = Food();

burger = new Food();
console.log(burger);

// 2. Using the mdn documents about Array, check to see if that instance is an array.

Array.isArray(burger);

// Comes out false

// 2a. create an array and check to see if it is an array as well.

let junkFood = ["Burger", "Fries", "Shake"];

Array.isArray(junkFood);

// Comes out true

// 3. Using the documents join the array together and console.log the results.

const elements = ["Burger", "Fries", "Shake"];
console.log(elements.join());

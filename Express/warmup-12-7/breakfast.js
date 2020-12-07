//What does this code do?

const breakfastOptions = [
    "banana",
    "cereal",
    "croissant",
    "coffee",
    "granola + yogurt",
    "smoothie",
    "menthols and diet coke",
];

for (let i = 0; i < breakfastOptions.length; i++) {
    console.log(`I would like ${breakfastOptions[i]} to go.`);
}
// what does the code do?

// It is looping through the array  in breakfastOptions and printing out
//each object in a template literal.

// rewrite code above

breakfastOptions.forEach(function (breakfastOption) {
    console.log(`I would like ${breakfastOption} to go.`);
});

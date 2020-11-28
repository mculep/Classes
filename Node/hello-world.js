// console.log("Hello world");

// 1. Console log from 1 to 100 using node.

<<<<<<< HEAD
for (let i = 1; i < 101; i++) {
    console.log(i);
=======
for (let i = 0; i <= 100; i++) {
    
console.log(i)
>>>>>>> 0cd025107941f2085c3c477d365695bc32e2e982
}
// 2. Create a function that accepts a string as an argument.
// Have the program write to the terminal "The cow says ... {the value supplied}"
// Call that function 3 times with 3 different strings as the argument.

function myfunc(cow) {
    console.log(`The cow says ... ${cow}.`);
}
myfunc("moo");
myfunc("hello");
myfunc("howzit");

let people = [
    { name: "batman", powers: "none" },
    { name: "iron man", power: "rich" },
    { name: "The Hulk", powers: "being green" },
    { name: "Superman", powers: "Being an Alien" },
];

let names = people.map((peoples) => {
    return peoples.name;
});

console.log(names);

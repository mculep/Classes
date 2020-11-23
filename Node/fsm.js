// 1. Create a node app that will read the contents of a text file and console.log the content.

const fs = require("fs");

fs.readFile("./test.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
});

// 2. Create a json file called "data.json" with the following content.
// [
//     {"name":"Clint", "age":29},
//     {"name":"Anna", "age":27},
//     {"name":"Olivia", "age":11}
// ]
// For each name person console.log("{name} is {age} years old!" where name and age are the keys name and age respectivly.

const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    let output = JSON.parse(data);
    output.forEach((person) => {
        console.log(`${person.name} is ${person.age} years old!`);
    });
});

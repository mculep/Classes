// 1. Write a program that will declare a variable named "value".
// Have an if, if else, else statement that compares that value.

let value = 13;

if (value == 9) {
    console.log("Nope");
} else if (value == 13) {
    console.log("Good");
} else {
    console.log("Doesn't match");
}

// 2. using ternary.
// compare if one number is greater than another.
// set the value of a variable named 'result' to 'higher' if the
// first number is higher and lower if the first number is lower.

let a = 15,
    b = 20;

a > b ? console.log("Higher") : console.log("Lower");

// 3. Using switch.
// set a variable named = 'temp' and give it a value between -20 & 110.
// Have cases for sub 0, 30, 50, 75, 80, 90, and above.
// Have a hex color for each level going from blue to red.
// print out the color that represents the range.

let temp = 89;
let color = null;

switch (true) {
    case temp < 0:
        color = "16a596";
        break;
    case temp < 30:
        color = "9ad3bc";
        break;
    case temp < 50:
        color = "1f6f8b";
        break;
    case temp < 75:
        color = "f5b461";
        break;
    case temp < 80:
        color = "FF7F11";
        break;
    case temp < 90:
        color = "FF1B1C";
        break;
    default:
        output = "very high";
}
console.log(color);

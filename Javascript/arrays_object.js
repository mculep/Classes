// 1. Make an array of ship objects (at least 3). Each ship needs a name, topSpeed, acceleration, and cargo capacity.

let ship = [
    {
        name: "obama",
        topSpeed: 150,
        acceleration: 360,
        cargoCapacity: 50,
    },
    {
        name: "trump",
        topSpeed: 56,
        acceleration: 100,
        cargoCapacity: 75,
    },
    {
        name: "biden",
        topSpeed: 56,
        acceleration: 100,
        cargoCapacity: 75,
    },
];

// 2. console.log the name and top speed of the 2nd ship.

console.log(ship[1].name, ship[1].topSpeed);

// 3. loop through the array and print out every stat in a key:value style.

ship.forEach(function (ship) {
    console.log(
        `${ship.name} ${ship.topSpeed} ${ship.acceleration} ${ship.cargoCapacity}`
    );
});

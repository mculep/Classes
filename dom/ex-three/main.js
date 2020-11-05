// let content = document.createElement("div");
// let bigList = document.createElement("ul");
// let someText = document.createElement("p");
//These items are created but not added yet.

let div = document.querySelector("#main-content");

let foodList = document.createElement("ul");
div.append(foodList);
//Appends the section header. It is still not part of the DOM
//section.appendChild was the older way

for (let i = 0; i < 5; i++) {
    let l = document.createElement("li");
    l.append(`This is item #${i}`);
    foodList.append(l);
}

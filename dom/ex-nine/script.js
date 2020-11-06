let num = 0;

let button = document.querySelector(".more-info");
button.classList.add("btn");

// let childIdea = document.querySelector(".child-idea");
// childIdea.classList.add("btn");

const func1 = function () {
    num++;
    if (num == 10) {
        button.removeEventListener("click", func1);
        button.style.backgroundColor = "black";
    }
    button.innerHTML = num;
};

// const func2 = function () {
//     console.log("function2 was fired");
// };

button.addEventListener("click", func1);
// button.addEventListener("click", func2);

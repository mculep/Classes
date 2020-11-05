//add class
let footer = document.querySelector("footer");
footer.classList.add("highlighted");

//add multiple clases
let myButton = document.querySelector("#more-info");
myButton.classList.add("btn", "primary");

//remove class
let mainIdea = document.querySelector("#main-idea");
mainIdea.classList.remove("highlighted");

//remove class not present.. no error
mainIdea.classList.remove("foo-bar");

let myButton = document.querySelector("#more-info");
let myInterval = setInterval(function () {
    myButton.classList.toggle("hidden");
}, 300);
//please do not have a blinking like this in your site.

//Replace Class
let footer = document.querySelector("footer");
footer.classList.replace("highlighted", "primary");

//Replace Class non existant class does nothing
footer.classList.replace("foo-bar", "primary");

let res = footer.classList.contains("foo-bar");
console.log(res);

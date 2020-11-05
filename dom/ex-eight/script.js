let myEvent = new Event("random");
console.log(myEvent);

let color = 254;
let body = document.querySelector("body");
//again the browser passes the event to the function
body.onscroll = function (e) {
    body.style.background = `rgb(${color}, ${color}, ${color})`;
    color--;
    color = color < 0 ? 0 : color;
};

document.getElementById("button").bgcolor = "#f4f4f4";

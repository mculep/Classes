let showDog = (res) => {
    let images = res.message;

    let randomBtn = document.getElement("btn");
    randomBtn.innerText = "Click here";
    randomBtn.addEventListener("click", () => {
        document.body.append(image1);
    });

    // let image1 = document.createElement("img");
    // image1.src = images;
    // document.body.append(image1);
};
fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => showDog(data));

// let randomBtn = document.querySelector("button");
// randomBtn.addEventListener("click", function () {
//     const body = document.querySelector("body");
//     body.style.backgroundColor = "blue";
// });

let randomBtn = document.getElementById("btn");
randomBtn.innerText = "Click here";
randomBtn.addEventListener("click", () => {
    document.body.append(showDog(image1));
});

// const input = document.querySelector("input");
// input.addEventListener('input', (evt) => {
//     fetch
// }

// fetch("https://dog.ceo/api/breed/hound/images")
//     .then((response) => response.json())
//     .then((data) => addBreeds(data));

// key["name"]
// listItems.innerText = key["name"];

// console.log(breedList);
// //Breedlist is an object with keys that cor to the breed names.
// //identify a node on the dom using a selector and add the key to the text of the dom node inside of the loop
// //loop through all of the keys and add each of the keys to the webpage.
// let dogs = document.getElementById("breeds");
// for (let key in breedList) {
//     let listItems = document.createElement("li");
//     listItems.innerText = key;
//     dogs.appendChild(listItems);
// }

//ajax.js
// const ajax = (url, callback, method = "GET") => {
//     if (!url) return console.error("Request Required");
//     if (!callback) return console.error("Callback Required");
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", (evt) => {
//         let req = evt.target;
//         if (req.readyState !== 4) return;
//         if (req.status === 200) return callback(req.response);
//         callback("");
//     });
//     request.open(method, url);

//     request.send();
// };

// ****************************************************

// ajax("https://dog.ceo/api/breeds/list/all", (r, input) =>
//     console.log(JSON.parse(r))
// );

// let r = ajax("https://dog.ceo/api/breeds/list/all", (r, input) => {
//     console.log(r);
//     addBreeds(r);

//     return JSON.parse(r);
// });

//
// }

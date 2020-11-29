const xhr = new XMLHttpRequest();
// configuring the request
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.responseType = "json"; // this will automatically parse for you

xhr.onload = function () {
    // This function handles the incoming response
    // Use this instead of event listeners (some browsers my not support it)
    const listOfPost = JSON.parse(xhr.response); // <- you can do this instead of xhr.response.Type = 'json';
    const listOfPost = xhr.response; // extracting the data or use
    console.log(listOfPost);
};
xhr.send();

const listElement = document.querySelector(".post");
const singlePost = document.getElementById("single-post");

// *********** Udemy Node Practice *************
const listElement = document.querySelector(".posts");
const singlePost = document.getElementById("single-post");

const xhr = new XMLHttpRequest();
// configuring the request
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.responseType = "json"; // this will automatically parse for you

xhr.onload = function () {
    // This function handles the incoming response
    // Use this instead of event listeners (some browsers my not support it)
    // const listOfPost = JSON.parse(xhr.response); // <- you can do this instead of xhr.response.Type = 'json';
    const listOfPost = xhr.response; // extracting the data or use
    for (const post of listOfPost) {
        const postEl = document.importNode(singlePost.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase(); //<- Files that we fetch shows title and a body property
        postEl.querySelector("p").textContent = post.body;
        listElement.append(postEl);
    }
};
xhr.send();

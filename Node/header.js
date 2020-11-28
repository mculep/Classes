const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.write(JSON.stringify(people));
    res.end();
});

server.listen(5566, () => {
    console.log(`Running on Port ${5566}`);
});

let people = [
    {
        firstname: "Samson",
        lastname: "Fatso",
        email: "samson@gmail.com",
    },

    {
        firstname: "Peanut",
        lastname: "Butter",
        email: "peanut@gmail.com",
    },

    {
        firstname: "Ham",
        lastname: "Cheese",
        email: "ham@gmail.com",
    },
];

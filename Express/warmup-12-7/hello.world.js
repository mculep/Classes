const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 3000;
const host = "localhost";

app.get("/", (req, res) => {
    res.send("Hello World");
});

server.listen(port, host, () => {
    console.log("http://localhost:3000");
});

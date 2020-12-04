const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const host = "localhost";
const port = 4000;

// home page
app.get("/", (req, res) => {
    res.send(`
    <h1>Aloha and Welcome!</h1>  
    <a href="/beaches">Enter</a>
    `);
});
// beaches
app.get("/beaches", (req, res) => {
    res.send(`
    <ul>
    <li><a href="beaches/ehukai">Ehukai</a></li>
    <li><a href="beaches/alamoana">Alamoana Rock Piles</a></li>
    <li><a href="beaches/kaimana">Kaimana Beach</a></li>
    </ul>
    `);
});

app.get("/beaches/:beachName", (req, res) => {
    const beachName = req.params.beachName;
    res.send(`
    <h1>You are at ${beachName}</h1>
    <a href="/">Home</a>
    `);
});

app.get("beaches/:beachName", (req, res) => {
    res.send(`
    <h1>You are at ${beachName}</h1>
    <a href="/">Home</a>
     `);
});

app.get("beaches/beachName", (req, res) => {
    res.send(`
    <h1>You are at ${beachName}</h1>
    <a href="/">Home</a> 
    `);
});

server.listen(port, host, () => {
    console.log("http://localhost:4000");
});

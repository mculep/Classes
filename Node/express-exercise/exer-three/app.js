const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
const port = 4458;

let people = require("./people.json");
app.get("/people");
app.get("/", (req, res) => {
    res.send("<h1>Stuff</h1>");
});

app.get("/api/people", (req, res) => {
    res.send(people);
});

app.get("/api/people/gender/:gender", (req, res) => {
    const { gender } = req.params;
    let results = people.filter((person) => person.gender == gender);
    res.send(results);
});

app.get("/api/people/email/:email", (req, res) => {
    const { email } = req.params;
    let results = people.filter((person) => person.email == email);
    res.send(results);
});
server.listen(port);

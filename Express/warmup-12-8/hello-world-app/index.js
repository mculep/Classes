const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 4000;
const es6Renderer = require('express-es6-template-engine');

app.engine("html", ex6Renderer) 
app.set("views", "templates") 
app.set{"view engine", "html"} 


app.get("/", (req, res) => {
    res.render("home");
});

server.listen(port, "localhost", () => {
    console.log("Running on 4000");
});


const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = 4000;
const es6Renderer = require('express-es6-template-engine');

app.engine("html", ex6Renderer) // register a new view engine
app.set("views", "templates") // where to find the template files
app.set{"view engine", "html"} // default view engine


app.get("/", (req, res) => {
    res.render("home");
});

server.listen(port, "localhost", () => {
    console.log("Running on 4000");
});


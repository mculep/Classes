const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const _404Content = `
  <!DOCTYPE html>
  <html> 
      <head> 
          <title>An Error you have found</title>
      </head>
      <body>
          <h1>404</h1>
          <blockquote>"An Error you have found" - Yoda
          </blockquote>
      </body>
  </html>
  `;
const send404 = (req, res) => {
    res.status(404);
    res.send(_404Content);
};

const homePage = app.get("/", (req, res) => {
    res.send("<div>Home Page</div>");
});

app.get("/about", (req, res) => {
    res.send("<div>About</div>");
});

app.get("*", (req, res) => {
    console.log("A request has been recieved at the root of the app!");
    res.end("Hello Express!");
});

const port = 3000;
server.listen(port, () => console.log(`listening on port ${port}`));

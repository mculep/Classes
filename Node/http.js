// 1. Create a http server that will host a html document that has a title, a heading, and a list of your favorite foods.
// Make the html document a valid html document.
// Add a secret message in in the console using the script tag.

const http = require("http");

const htmlContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>HTML Content from Node</title>
          </head>
          <body>
              <h1>This is a full HTML document!</h1>
              <ul>
                  <li>It's Valid!</li>
                  <li>It's From Node!</li>
                  <li>It's Just a String!</li>
              </ul>
              <script>
                  console.log("It's like magic")
              </script>
          </body>
      </html>
  `;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end(htmlContent);
});

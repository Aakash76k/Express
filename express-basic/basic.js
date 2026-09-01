const http = require("http");
const express = require("express");
const app = express();

//const server = http.createServer(app);

app.get("/", (req, res) => {
 // res.writeHead(200, { "content-Type": "text/html" });
  res.send(`
        <nav>
            <ul>
                <li><a href="/">Home</li>
                <li> <a href="/about">About</li>
                <li><a href="/contact">contact</li>
                <li><a href="/project">Project</li>
            </ul>
        </nav>
         <h1>"Hello Guru ji"</h1>;
        `);
 // res.send("Hello Guru ji");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});

app.get("/project", (req, res) => {
  res.send("Welcome to project page");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

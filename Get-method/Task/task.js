//  Assignments: Express.js Routing Practice
// Task 1: The "Movie Library" (Modular Approach)

const http = require("http");
const express = require("express");
const movieList = require("./taskdata");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/movie", (req , res)=>{
    res.json(movieList);
});

app.listen(4001, () => {
  console.log("server is running on http://localhost:4001");
});

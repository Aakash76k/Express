const http = require("http");
const express = require("express");
const studentList = require("./StudentsData");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/students", (req , res)=>{
    res.json(studentList);
});

app.listen(4000, () => {
  console.log("server is running on http://localhost:4000");
});

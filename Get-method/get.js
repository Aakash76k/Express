const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

// app.get("/about", (req , res)=>{
//     res.send("about page");
// });

// app.get("/api/contact",(req, res)=>{
//     res.json({
//        name: "jhon Doe",
//        email: "john@gmail.com",
//        phone: "123-456-7890",
//        course: "Node js"
//     });
// })

// app.listen(3000, () => {
//   console.log("server is running on http://localhost:3000");
// });

// Example :- gym management system

app.get("/about", (req, res) => {
  res.json({
    name: "Rahul",
    age: "30",
    height: "6",
    weight: "76"
  });
});

app.get("/contact", (req, res) => {
  res.json({
    name: "Gym",
    address: "xyz",
    location: "abcd",
    contact: "1234567891",
  });
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});

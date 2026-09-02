const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req , res)=>{
    res.send("hello");
});


app.get("/about", (req , res)=>{
    res.send("about page");
});

app.get("/api/contact",(req, res)=>{
    res.json({
       name: "jhon Doe",
       email: "john@gmail.com",
       phone: "123-456-7890",
       course: "Node js" 
    });
})

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});
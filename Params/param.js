const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("hello");
});

app.get("/user/:name", (req,res)=>{
    const UserName = req.params.name;
    res.send(`UserName: ${UserName}`)
});

app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000");
});
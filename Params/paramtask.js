const http = require("http");
const express = require("express");

const app = express();

// task1 :- instafinder using array and find the name etc..
const instaFinder = [
    {username: "webgyan", fullname: "webgyan dev", follower:"100" },
    {username: "web", fullname: "webgyan", follower:"1000" },
    {username: "gyan", fullname: "gyan dev", follower:"10" },

];

// app.get("/", (req, res)=>{
//     res.send("hello webgyan");
// });

app.get("/api/profile/:username", (req,res)=>{
    const UserName = req.params.username;
    const userProfile = instaFinder.find((user) => user.username===UserName);
    if(userProfile){
        res.send(`welcome to ${userProfile.fullname}`);
    }else{
        res.status(404).send("user not found");
    }

   
});

app.listen(5001,()=>{
    console.log("Server is running on http://localhost:5001");
})
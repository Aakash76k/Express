const express = require('express');
const QRCode = require('qrcode');
const app = express();

app.get("/",(req,res)=>{
    res.send("Home");
});

app.listen(4000,()=>{
    console.log("http://localhost:4000");
});
const express = require('express');
const QRCode = require('qrcode');
const app = express();

app.get("/",(req,res)=>{
    res.send("Home");
});


app.get("/qrcode" ,async (req,res)=>{
    const textOrUrl = req.query.text;

    if(!textOrUrl){
        return res.status(400).send("invalid data")
    }

    try{
        const qrbufferImage = await QRCode.toBuffer(textOrUrl)
        res.setHeader('content-type','image/png')
        res.send(qrbufferImage)

    }

    catch(error){
        console.log(error);
    }
    res.send("Error")

});

app.listen(4000,()=>{
    console.log("http://localhost:4000");
});
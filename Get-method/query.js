const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/mobiles",(req,res)=>{
    const brand = req.query.brand;
    const color = req.query.color;

    res.json({
        message: "Data recieved succesfully",
        brand: "brand",
        color: "color",
    });
});

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})
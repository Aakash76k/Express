const express = require("express");
const app = express();


const date = new Date();
const time = date.getHours();
//predefine middleware use query // url?role=Admin

app.use((req,res,next)=>{
    next();
})


const checkTime = (req,res,next)=>{
    if(time>7 && time<24){
        res.send("sale");
    }else{
        res.send("time is over")
    }
}

app.get("/", (req, res) => {
  res.send("Hello Guru ji");
});

app.get("/api/sale",checkTime,(req,res,next)=>{
    res.send("sale ")
})



// middleware use 


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

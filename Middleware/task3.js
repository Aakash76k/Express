//task :- check gym maintainance

const express = require("express");
const app = express();


const date = new Date();



app.use((req,res,next)=>{
    next();
})



const maintain = (req,res,next)=>{
    const maintain = true;
    if(maintain){
        next();
    }else{
        res.send("gym closed")
    }
}

app.get("/", (req, res) => {
  res.send("Hello Guru ji");
});

app.get("/api/maintain",maintain,(req,res,next)=>{
    res.send("Gym open")
})



// middleware use 


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log(`route - ${req.url}`);
    next();
})

//predefine middleware use query // url?role=Admin

const CheckAdmin = (req,res,next)=>{
    if(req.query.role === "Admin"){
        next();
    }else {
        res.send("you are not admin");
    }
}



app.get("/", (req, res) => {
  res.send("Hello Guru ji");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});

app.get("/project", (req, res) => {
  res.send("Welcome to project page");
});

app.get("/Dashboard",CheckAdmin,(req,res)=>{
    res.send("Admin Dashboard: Divyanshu");
})

// middleware use 
app.use((req,res,next)=>{
    res.status(404).send(
        `
        <div  style="text-align:center margin-top:50">
            <h1>404 Page Not Found</h1>
        </div
        
        `,
    )
})

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

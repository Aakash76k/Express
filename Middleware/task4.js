const express = require("express");
const app = express();

app.use(express.json());



//predefine middleware use query // url?role=Admin

const validateMember = (req, res, next) => {
  const { name, plan } = req.body;
  if (!name || !plan) {
    return res.json({
      error: "name  and plan empty nhi honge ",
    });
  }
  next();
};

app.post("/api/members", validateMember, (req, res) => {
  res.send("data validate successfully");
});





// middleware use 


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

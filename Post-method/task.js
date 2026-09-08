
const express = require("express");
const app = express();
const task1 = require("./task1");

const gym = [];

app.use(express.json());

app.get("/api/gym" , (req, res)=>{
  res.json(gym);
})

app.post("/api/gym", (req, res) => {
  const memberName = req.body.name;
  const memberPlan = req.body.plan;

  console.log("new Data :  ", req.body);

  const GymMember = {
    name:memberName,
    plan:memberPlan
  }

  gym.push(GymMember);

  res.json({
    success: true,
    message: "Data received successfully",
    GymMember
  });
});
app.listen(7000, () => {
  console.log("Server is running on port http://localhost:7000");
});




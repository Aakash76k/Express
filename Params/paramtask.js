const http = require("http");
const express = require("express");

const app = express();

// task1 :- instafinder using array and find the name etc.. (String Params & Error Handling)
// const instaFinder = [
//     {username: "webgyan", fullname: "webgyan dev", follower:"100" },
//     {username: "web", fullname: "webgyan", follower:"1000" },
//     {username: "gyan", fullname: "gyan dev", follower:"10" },

// ];

// app.get("/api/profile/:username", (req,res)=>{
//     const UserName = req.params.username;
//     const userProfile = instaFinder.find((user) => user.username===UserName);
//     if(userProfile){
//         res.send(`welcome to ${userProfile.fullname}`);
//     }else{
//         res.status(404).send("user not found");
//     }

// });

// app.listen(5001,()=>{
//     console.log("Server is running on http://localhost:5001");
// })

// Task 2: The "Bank Account" Lookup (The parseInt Trap)

const bankAccount = [
  { accholder: "webgyan", accno: "123423", balance: "100" },
  { accholder: "web", accno: "124523", balance: "1000" },
  { accholder: "gyan", accno: "127723", balance: "10000" },
];

app.get("/api/profile/:accholder", (req, res) => {
  const AccHolder = req.params.accholder;
  const userAcc = bankAccount.find((user) => user.accholder === AccHolder);
  if (userAcc) {
    res.send(`welcome to ${userAcc.accno}`);
  } else {
    res.status(404).send("user not found");
  }
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});

// Task 1: The "Employee ID" Lookup (Basic Number Param)

const emplId = [
  { empId: 1, name: "Aman", role: "Developer" },
  { empId: 2, name: "Priya", role: "Designer" },
  { empId: 3, name: "Rohan", role: "Manager" },
];

app.get("/api/profile/:empid", (req, res) => {
  const EmpId = req.params.empId;
  const EmployId = emplId.find((user) => user.empId === EmpId);
  if (EmployId) {
    res.send(`welcome to ${EmployId.name}`);
  } else {
    res.status(404).send("user not found");
  }
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});

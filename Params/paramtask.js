const http = require("http");
const express = require("express");

const app = express();

// task1 :- instafinder using array and find the name etc.. (String Params & Error Handling)

const instaFinder = [
  { username: "webgyan", fullname: "webgyan dev", follower: "100" },
  { username: "web", fullname: "webgyan", follower: "1000" },
  { username: "gyan", fullname: "gyan dev", follower: "10" },
];

app.get("/api/profile/:username", (req, res) => {
  const UserName = req.params.username;
  const userProfile = instaFinder.find((user) => user.username === UserName);
  if (userProfile) {
    res.json(userProfile);
  } else {
    res.status(404).json({
      error: "Profile not found!",
    });
  }
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});

// Task 2: The "Bank Account" Lookup (The parseInt Trap)

const bankAccount = [
  { accNo: 101, accountHolder: "webgyan", balance: 100 },
  { accNo: 102, accountHolder: "web", balance: 1000 },
  { accNo: 103, accountHolder: "gyan", balance: 10000 },
];

app.get("/api/account/:accNo", (req, res) => {
  const accNo = parseInt(req.params.accNo);

  const userAccount = bankAccount.find((user) => user.accNo === accNo);

  if (userAccount) {
    res.json(userAccount);
  } else {
    res.status(404).json({
      error: "Account not found!",
    });
  }
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});

// Task 3: The "Employee ID" Lookup (Basic Number Param)

const employees = [
  { empId: 1, name: "Aman", role: "Developer" },
  { empId: 2, name: "Priya", role: "Designer" },
  { empId: 3, name: "Rohan", role: "Manager" },
];

app.get("/api/employees/:empId", (req, res) => {
  const empId = parseInt(req.params.empId);

  const employee = employees.find((user) => user.empId === empId);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({
      error: "Employee not found!",
    });
  }
});

app.listen(5002, () => {
  console.log("Server is running on http://localhost:5002");
});

//Task 4: The "Country Capital" Finder (Basic String Param)

const countries = [
  { country: "india", capital: "New Delhi" },
  { country: "japan", capital: "Tokyo" },
  { country: "france", capital: "Paris" },
];

app.get("/api/countries/:countryName", (req, res) => {
  const countryName = req.params.countryName;

  const country = countries.find((user) => user.country === countryName);

  if (country) {
    res.json(country);
  } else {
    res.status(404).json({
      error: "Country not found!",
    });
  }
});

app.listen(5003, () => {
  console.log("Server is running on http://localhost:5003");
});

// Task 5: The "Restaurant Menu" (Params + 404 Error Handling)?


const menu = [
  { id: 101, dish: "Pizza", price: 299 },
  { id: 102, dish: "Burger", price: 99 },
];

app.get("/api/menu/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foodItem = menu.find((item) => item.id === id);

  if (foodItem) {
    res.json(foodItem);
  } else {
    res.status(404).json({
      message: "Sorry, dish not found!",
    });
  }
});

app.listen(5004, () => {
  console.log("Server is running on http://localhost:5004");
});


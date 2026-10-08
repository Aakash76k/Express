const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use("/todo",)

app.use("/user", userRoutes);
app.listen(5000, () => {
  console.log("http://localhost:5000");
});
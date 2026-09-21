const express = require("express");
const app = express();

app.set("view engine", "EJS");

app.get("/", (req, res) => {
  const userName = "Ducat";
  const techSkills = ["mern", "DA", "DS", "FS"];
  res.render("index", {
    name: userName, skills : techSkills
  });
});

app.listen(4000, () => {
  console.log(`http://localhost:4000`);
});

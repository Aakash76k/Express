const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "data.json");

app.post("/api/submit", (req, res) => {
  const { name, email } = req.body;

  console.log("data  recevied onserver  :  ", { name, email });

  // read json file

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "JSON file not read",
      });
    }

    let users = [];

    if (data) {
      users = JSON.parse(data); // data convert json formet
    }

    //add new user
    users.push({
      name,
      email,
    });

    // save json file

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "data not save",
        });
      }

      res.json({
        success: true,
        message: `Hello ${name} , form submited`,
      });
    });
  });
});
app.listen(5000, () => {
  console.log("http://localhost:5000");
});

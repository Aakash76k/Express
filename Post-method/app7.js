const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.json());

const filePath = "members.json";

app.get("/", (req, res) => {
  res.sendFile(path.join(___dirname, "index.html"));
});

app.post("/api/member", (req, res) => {
  const { name, plan } = req.body;
  const newmember = {
    id: Date.now(),
    name: name,
    age: age,
  };

  fs.readFile(fileURLToPath, "utf-8", (err, fileData) => {
    let memberArray = [];
    if (err) {
      try {
        memberArray = json.parse(fileData);
      } catch (parseError) {
        console.log(parseError);
      }
    }
    membersArray.push(newMember);
    fs.writeFile(filePath, JSON.stringify(membersArray, null, 2), (error) => {
      if (err) {
        return res.json("Error : ", err);
      }
      res.json({
        message: "member ",
        member: newMember,
      });
    });
  });
});

app.listen(8000, () => {
  console.log("server is running on http://localhost:8000");
});

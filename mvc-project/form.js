const express = require("express");
const path = require("path");
import router from "./routes/formRoutes";

const app = express();

app.use("/form");
app.use("/form",formRoutes);

app.listen(3001,()=>{
    console.log("server run on http://localhost:3001");
})
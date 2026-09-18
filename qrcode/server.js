const express = require("express");
const QRCode = require("qrcode");
const app = express();
const fs = require("fs");
const path = require("path");

const qrFolder = path.join(__dirname, "qr_image");
if (!fs.existsSync(qrFolder)) {
  fs.mkdirSync(qrFolder);
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/qrcode", async (req, res) => {
  const textOrUrl = req.query.text;

  if (!textOrUrl) {
    return res.status(400).send("invalid data");
  }

  try {
    const fileName = `qrCode_${Date.now()}.png`;
    const filePath = path.join(qrFolder, fileName);

    await QRCode.toFile(filePath, textOrUrl);
    res.json({
      message: "Qr code save successfully",
      fileName: fileName,
    });
  } catch (error) {
    console.error(error);
    res.send("Server Error");
  }
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});

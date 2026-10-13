const express = require("express");
const router = express.Router();

const {
    showForm,
    submitForm,
} = require("../controllers/formController");

router.get("/", showForm);
router.post("/submit",submitForm);

module.exports = router;
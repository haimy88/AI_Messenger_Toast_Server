const express = require("express");
const { createToast } = require("../controllers/toastController");

const router = express.Router();

router.post("/toast", createToast);

module.exports = router;

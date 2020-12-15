const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("TESTING BACKEND"));

module.exports = router;

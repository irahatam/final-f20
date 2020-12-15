const express = require("express");
const router = express.Router();

const sampleJSON = [
  {
    name: "Matahari",
    role: "Student",
  },
  {
    name: "James",
    role: "Prof",
  },
];

router.get("/", (req, res) => res.send(sampleJSON));

module.exports = router;

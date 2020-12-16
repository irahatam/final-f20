const express = require("express");
const router = express.Router();

const sampleKlassJSON = [
  {
    klassName: "Zumba",
    klassInstructor: "Matahari",
    klassID: "01",
    klassInstructorID: "001",
    klassDate: "Friday, Nov 25, 2020",
    klassTime: "5 PM EST",
    klassLink: "https://zoom.us",
  },
];

router.get("/", (req, res) => res.send(sampleKlassJSON));

module.exports = router;

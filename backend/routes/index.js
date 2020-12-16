const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const db = firebase.firestore();
const klasses = db.collection("klasses");

router.get("/all-klasses", (req, res) => {
  const klassesArray = [];

  klasses
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        klassesArray.push(doc.data());
      });
      return res.send(klassesArray);
    })
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});
module.exports = router;

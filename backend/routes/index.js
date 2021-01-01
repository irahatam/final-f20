const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const db = firebase.firestore();
const klasses = db.collection("klasses");

router.get("/profile/:id", (req, res) => {
  const klassesArray = [];
  // Get ID
  const queryId = req.params.id;

  klasses
    .where("klassUserID", "==", queryId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        klassesArray.push(doc.data());
      });
      return res.send(klassesArray);
    })
    .catch(function (error) {
      console.warn("Error:", error);
      return res.send(error);
    });
});

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
      return res.send(error);
    });
});

router.get("/create", (req, res) => {
  const queryParams = req.query;

  klasses
    .doc()
    .set(queryParams)
    .then(function (doc) {
      res.send("Success!");
    })
    .catch(function (e) {
      res.send([{ ERROR_SUBMITTING: e.toString() }]);
    });
});

module.exports = router;

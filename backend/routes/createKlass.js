const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
const db = firebase.firestore();
const klasses = db.collection("klasses");

router.get("/", (req, res) => {
  const queryParams = req.query;

  klasses
    .doc()
    .set(queryParams)
    .then(function (doc) {
      res.send("Success!");
    })
    .catch(function (e) {
      console.warn("ERROR", e);
      res.send([{ ERROR_SUBMITTING: e.toString() }]);
    });
});
module.exports = router;

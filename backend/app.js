// Backend Application for Final Project
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Initializing Firebase
const firebase = require("firebase");
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "final-f20.firebaseapp.com",
  projectId: "final-f20",
  storageBucket: "final-f20.appspot.com",
  messagingSenderId: "663769538851",
  appId: "1:663769538851:web:0d889e50389ea7c3446c96",
};
firebase.initializeApp(firebaseConfig);

// import routes
const indexRoute = require("./routes/index.js");
const createKlass = require("./routes/index.js");

// Working around CORS Error
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
// app.get("/", ()=>{router.index});
// app.get("/create", ()=>{router.index});
// Route moved to routes/index.js

const router = require("./routes");

// pass routes/index.js to app /
app.use("/", router);

app.listen(port, () => console.log(`Backend is running at port:${port}`));

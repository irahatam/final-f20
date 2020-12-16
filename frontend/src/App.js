import "./App.css";
import { useEffect, useState, useMemo } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

// Import the pages
import CreateAccount from "./containers/CreateAccount";
import Header from "./components/Header";
import Home from "./containers/Home";
import Login from "./containers/Login";
import CreateKlass from "./containers/CreateKlass";
import UserProfile from "./containers/UserProfile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userAuthInfo, setUserAuthInfo] = useState(false);

  const firebaseConfig = useMemo(
    () => ({
      apiKey: process.env.REACT_APP_FIREBASE_API,
      authDomain: "final-f20.firebaseapp.com",
      projectId: "final-f20",
      storageBucket: "final-f20.appspot.com",
      messagingSenderId: "663769538851",
      appId: "1:663769538851:web:0d889e50389ea7c3446c96",
    }),
    []
  );

  // Ensure app is initialized when it is ready
  useEffect(() => {
    // if firebase is not already initialized...
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  // Check to see if user is logged in...
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // user is logged in
        setUserAuthInfo(user);
        setLoggedIn(true);
      } else {
        // not logged in
        setUserAuthInfo({});
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  // Function for logging in
  function LoginFunction(e) {
    // This is what you will run when you want to login
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        setLoggedIn(true);
      })
      .catch(function (error) {
        window.alert("Oops, you don't have an account yet!", error);
      });
  }

  // Function for logging out
  function LogoutFunction() {
    // Function to run when you want to logout
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
        setUserAuthInfo({});
      })
      .catch(function (error) {
        console.warn("LOGOUT ERROR", error);
      });
  }

  // Function for creating an account
  function CreateAccountFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        setLoggedIn(true);
      })
      .catch(function (error) {
        window.alert("Your password has to be 8 characters or more.");
        console.warn("ACCOUNT CREATION FAILED", error);
      });
  }

  if (loading) return null;

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        LogoutFunction={LogoutFunction}
        userAuthInfo={userAuthInfo}
      />
      <Router>
        <Route exact path="/login">
          {/* if someone is logged in, do not take them to login page 
          - take them to user profile */}

          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>

        <Route exact path="/create-account">
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>

        <Route exact path="/create-klass">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <CreateKlass userAuthInfo={userAuthInfo} />
          )}
        </Route>

        <Route exact path="/profile/:id">
          {!loggedIn ? <Redirect to="/login" /> : <UserProfile />}
        </Route>

        <Route exact path="/">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <Home userAuthInfo={userAuthInfo} />
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;

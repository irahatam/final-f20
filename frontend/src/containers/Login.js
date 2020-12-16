import React from "react";
import LoginForm from "../components/LoginForm";

function Login({ LoginFunction }) {
  return (
    <div>
      <h1 className="Title">klasses.</h1>
      <h1>login to your account</h1>
      <LoginForm LoginFunction={LoginFunction} />
    </div>
  );
}

export default Login;

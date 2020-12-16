import React from "react";
import LoginForm from "../components/LoginForm";
import img from "./klasses.jpg";

function Login({ LoginFunction }) {
  return (
    <div>
      <img src={img} alt="Logo" className="Img" />
      <h1 className="Title">klasses.</h1>
      <h1>login to your account</h1>
      <LoginForm LoginFunction={LoginFunction} />
    </div>
  );
}

export default Login;

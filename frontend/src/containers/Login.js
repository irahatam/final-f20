import React from "react";
import LoginForm from "../components/LoginForm";
import img from "./klasses.jpg";
import Footer from "../components/Footer";

function Login({ LoginFunction }) {
  return (
    <div className="pl-12 pr-12 BgC">
      <img src={img} alt="Logo" className="Img" />
      <h1 className="Title">klasses.</h1>
      <h1>login to your account</h1>
      <LoginForm LoginFunction={LoginFunction} />
      <Footer />
    </div>
  );
}

export default Login;

import React from "react";

import Footer from "../components/Footer";

function LoginForm({ LoginFunction }) {
  return (
    <div className="pl-12 pr-12 BgC">
      <form className="SignupForm" onSubmit={(e) => LoginFunction(e)}>
        <label htmlFor="loginEmail">Email</label>
        <input type="email" name="loginEmail" />

        <label htmlFor="loginPassword">Password</label>
        <input type="password" name="loginPassword" />

        <button>Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default LoginForm;

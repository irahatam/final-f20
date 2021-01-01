import React from "react";

import Footer from "../components/Footer";

function CreateAccountForm({ CreateAccountFunction }) {
  return (
    <div className="pl-12 pr-12 BgC">
      <form className="SignupForm" onSubmit={(e) => CreateAccountFunction(e)}>
        <label htmlFor="createEmail">Email</label>
        <input type="email" name="createEmail" />

        <label htmlFor="createPassword">Password</label>
        <input type="password" name="createPassword" />

        <button>Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default CreateAccountForm;

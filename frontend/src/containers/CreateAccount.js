import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import img from "./klasses.jpg";

import Footer from "../components/Footer";

function CreateAccount({ CreateAccountFunction }) {
  return (
    <div className="pl-12 pr-12 BgC">
      <img src={img} alt="Logo" className="Img" />
      <h1 className="Title">klasses.</h1>
      <h1>create account</h1>
      <CreateAccountForm CreateAccountFunction={CreateAccountFunction} />
      <Footer />
    </div>
  );
}

export default CreateAccount;

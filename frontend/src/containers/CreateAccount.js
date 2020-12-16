import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import img from "./klasses.jpg";

function CreateAccount({ CreateAccountFunction }) {
  return (
    <div>
      <img src={img} alt="Logo" className="Img" />
      <h1 className="Title">klasses.</h1>
      <h1>create account</h1>
      <CreateAccountForm CreateAccountFunction={CreateAccountFunction} />
    </div>
  );
}

export default CreateAccount;

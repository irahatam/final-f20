import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccount({ CreateAccountFunction }) {
  return (
    <div>
      <h1 className="Title">klasses.</h1>
      <h1>create account</h1>
      <CreateAccountForm CreateAccountFunction={CreateAccountFunction} />
    </div>
  );
}

export default CreateAccount;

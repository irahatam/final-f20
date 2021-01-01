import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Footer from "../components/Footer";

function CreateKlass({ userAuthInfo }) {
  const history = useHistory();
  function submitKlass(e) {
    e.preventDefault();
    const klassName = e.target[0].value;
    const klassInstructor = e.target[1].value;
    const klassDate = e.target[2].value;
    const klassTime = e.target[3].value;
    const klassLink = e.target[4].value;
    const klassDesc = e.target[5].value;
    const klassUserID = userAuthInfo.uid;

    axios
      .get(
        `https://secret-brushlands-48608.herokuapp.com/create?klassName=${klassName}&klassInstructor=${klassInstructor}&klassDate=${klassDate}&klassTime=${klassTime}&klassLink=${klassLink}&klassDesc=${klassDesc}&klassUserID=${klassUserID}`
      )
      .then(function (response) {
        window.alert("Cool, you've successfully submitted a klass!");
        history.push("/");
      })
      .catch(function (error) {
        console.warn("ERROR_CREATING_POST", error);
      });
  }
  return (
    <div className="pl-12 pr-12 BgC">
      <h1 className="Title">Submit a Klass</h1>
      <form onSubmit={(e) => submitKlass(e)}>
        <label>
          Klass Name
          <input type="text" name="title" placeholder="Klass Name" />
        </label>
        <label>
          Instructor
          <input type="text" name="text" placeholder="Klass Instructor" />
        </label>
        <label>
          Date
          <input type="text" name="author" placeholder="Klass Date" />
        </label>
        <label>
          Time
          <input type="text" name="author" placeholder="Klass Time" />
        </label>
        <label>
          Link
          <input type="text" name="author" placeholder="Klass Link" />
        </label>
        <label>
          Description
          <input type="text" name="author" placeholder="Klass Description" />
        </label>
        <button type="submit">Submit Klass!</button>
      </form>
      <Footer />
    </div>
  );
}

export default CreateKlass;

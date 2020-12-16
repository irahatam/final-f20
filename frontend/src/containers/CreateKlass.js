import React from "react";
import axios from "axios";

function CreateKlass({ userAuthInfo }) {
  function submitKlass(e) {
    e.preventDefault();
    const klassName = e.currentTarget.klassName.value;
    const klassInstructor = e.currentTarget.klassInstructor.value;
    const klassDate = e.currentTarget.klassDate.value;
    const klassTime = e.currentTarget.klassTime.value;
    const klassLink = e.currentTarget.klassLink.value;
    const klassDesc = e.currentTarget.klassDesc.value;
    const klassUserID = userAuthInfo.uid;

    axios
      .get(
        `http://localhost:4000/create?klassName=${klassName}&klassInstructor=${klassInstructor}&klassDate=${klassDate}&klassTime=${klassTime}&klassLink=${klassLink}&klassDesc=${klassDesc}&klassUserID=${klassUserID}`
      )
      .then(function (response) {
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("ERROR_CREATING_POST", error);
      });
  }
  return (
    <div>
      <h1>Submit a Klass!</h1>
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
    </div>
  );
}

export default CreateKlass;

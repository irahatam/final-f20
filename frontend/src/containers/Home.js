import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [klassAPIData, setKlassAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000`)
      .then(function (response) {
        if (response.data) {
          setKlassAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <h2>Klasses List</h2>
      {klassAPIData.map((klass, i) => (
        <div key={i}>
          <p>Klass ID: {klass.klassID}</p>
          <p> Klass Name: {klass.klassName}</p>
          <p>Klass Instructor: {klass.klassInstructor}</p>
          <p>Klass Date: {klass.klassDate}</p>
          <p>Klass Time: {klass.klassTime}</p>
          <p>Klass Link: {klass.klassLink}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

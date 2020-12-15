import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [sampleAPIData, setSampleAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000`)
      .then(function (response) {
        if (response.data) {
          setSampleAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <h2>hi</h2>
      {sampleAPIData.map((item, i) => (
        <div key={i}>
          <h4>Name: {item.name}</h4>
          <h4>Role: {item.role}</h4>
        </div>
      ))}
    </div>
  );
}

export default Home;

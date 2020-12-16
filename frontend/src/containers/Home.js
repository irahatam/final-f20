import React, { useState, useEffect } from "react";
import axios from "axios";
import KlassCard from "../components/KlassCard";

function Home() {
  const [klassAPIData, setKlassAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://secret-brushlands-48608.herokuapp.com/all-klasses`)
      .then(function (response) {
        if (response.data) {
          setKlassAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.warn("error", error);
      });
  }, []);

  return (
    <div>
      <h1 className="Title">klasses.</h1>
      <div className="Home">
        <h1>klasses list</h1>
        <i>
          Convert to your timezone{" "}
          <a
            href="https://www.timeanddate.com/worldclock/converter.html"
            target="_blank"
          >
            here
          </a>
        </i>
      </div>
      {klassAPIData.map((klass, i) => (
        <KlassCard klassData={klass} key={i} />
      ))}
    </div>
  );
}

export default Home;
